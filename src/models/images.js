require('dotenv').config()
var fs = require('fs');
const path = require('path')
const connection = require('../database/connection')

const registerImage = async (image) => {

    try {
        const { mimetype, size, originalname } = image
        const dateNow = new Date(Date.now())
        const newPath = `${process.env.DATABASE_PATH_IMG}${image.filename}`

        const query = 'INSERT INTO Images(name, mimetype, size, path, upload_at) VALUES (?, ?, ? ,? ,? ) '
        const [registeredImage] = await connection.execute(query, [originalname, mimetype, size, newPath, dateNow])

        return {
            imageName: originalname,
            imageId: registeredImage.insertId,
            path: newPath,
            response:"Imagem cadastrada com sucesso"
    }

    } catch (error) {
        return true
    }


}

const getAllImages = async () => {
    try {
        const [allImages] = await connection.execute('SELECT * FROM Images')
        return allImages
    } catch (error) {
        console.log(error)
    }
}

const deleteImage = async (param) => {
    try {
        const { id } = param
        const [image] = await connection.execute(`SELECT * FROM Images WHERE id = '${id}'`)
        const newPath = `${process.env.DATABASE_PATH_DELETE}${image[0].path.split('/')[4]}`

        const [deleteImage] = await connection.execute(`DELETE FROM Images WHERE id = '${(id)}'`)

        fs.unlinkSync(newPath, (err) => {
            if (err) {
                console.log(err)
            }
        })

        return { response: "Imagem deletada com sucesso" }
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    registerImage,
    getAllImages,
    deleteImage,
}