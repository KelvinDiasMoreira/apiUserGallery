require('dotenv').config()


const express = require("express")
const app = express()
const mongoose = require("mongoose")




mongoose.connect(process.env.SECRET_PASSWORD).then(()=>{
    console.log("Conectado no db..")
    app.emit("connectDB")
})




app.on("connectDB", ()=>{
    app.listen(process.env.PORT, () =>{
        console.log(`rodando na porta : ${process.env.PORT}`)
    })  
})
