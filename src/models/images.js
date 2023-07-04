const connection = require('../database/connection')

const registerImage = async (filename, image) => {

    try {
        const { name } = filename
        const { mimetype, size, path } = image
        const dateNow = new Date(Date.now())

        const query = 'INSERT INTO Images(name, mimetype, size, path, upload_at) VALUES (?, ?, ? ,? ,? ) '
        const [registeredImage] = await connection.execute(query, [name, mimetype, size, path, dateNow])

        return { imageId: registeredImage.insertId, response: "Imagem cadastrada com sucesso" }

    } catch (error) {
        return true
    }


}


module.exports = {
    registerImage,
}