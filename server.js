require('dotenv').config()
import teste from './src/controllers/index'

const express = require("express")
const app = express()

app.listen(process.env.PORT, () =>{
    console.log(`rodando na porta : ${process.env.PORT}`)
}) 


teste();