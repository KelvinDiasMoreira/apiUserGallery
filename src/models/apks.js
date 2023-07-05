const connection = require('../database/connection')
var fs = require('fs');

const getAllApks = async () => {
    try {
        const [allApks] = await connection.execute('SELECT * FROM Apks')
        return allApks

    } catch (error) {
        console.log(error);
    }
}

const registerApk = async (apk) => {
   try {
    const { mimetype, size, originalname, filename } = apk
    let testString = filename.split('.')[1]
    if(testString !== "apk") throw new Error()
    const dateNow = new Date(Date.now())
    const newPath = `${process.env.DATABASE_PATH_IMG}${filename}`


    const query = 'INSERT INTO Apks(name, mimetype, size, path, upload_at) VALUES (?, ?, ? ,? ,? ) '
    const [registeredApk] = await connection.execute(query, [originalname, mimetype, size, newPath, dateNow])

    return {
        imageName: originalname,
        imageId: registeredApk.insertId,
        path: newPath,
        response:"apk cadastrado com sucesso"
}

} catch (error) {
    return true
}

}

const deleteApk = async (param) => {
    try{
        const { id } = param
        const [apk] = await connection.execute(`SELECT * FROM Apks WHERE id = '${id}'`)
        const newPath = `${process.env.DATABASE_PATH_DELETE}${apk[0].path.split('/')[4]}`

        const [deletedApk] = await connection.execute(`DELETE FROM Apks WHERE id = '${id}'`)

        fs.unlinkSync(newPath, (err) => {
            if (err) {
                console.log(err)
            }
        })
         
        return { response: "Apk deletado com sucesso" }
    }catch(error){
        console.log(error)
    }
}


module.exports = {
    getAllApks,
    registerApk,
    deleteApk
}