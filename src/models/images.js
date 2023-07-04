require('dotenv').config()
const connection = require('../database/connection')

const registerImage = async (filename, image) => {

    try {
        const { mimetype, size, path, originalname } = image
        const dateNow = new Date(Date.now())
        const newPath = `${process.env.DATABASE_PATH_IMG}${image.filename}`

        const query = 'INSERT INTO Images(name, mimetype, size, path, upload_at) VALUES (?, ?, ? ,? ,? ) '
        const [registeredImage] = await connection.execute(query, [originalname, mimetype, size, newPath, dateNow])

        return {imageName: originalname, imageId: registeredImage.insertId, path: newPath ,response: "Imagem cadastrada com sucesso" }

    } catch (error) {
        return true
    }


}


module.exports = {
    registerImage,
}