import mysql from "mysql";
import cors from "cors";
import dotenv from "dotenv"
import  express, { json } from "express";
const app = express()
dotenv.config()

app.use(cors())
app.use(express.json())
const db = mysql.createPool({
    user: process.env.user,
    host: process.env.host,
    password: process.env.password,
    port: process.env.portdb,
    database: process.env.database,
})

app.post("/",(req,res)=> {
    
    const selecao = req.body.selecao
    
    db.query(selecao,(erro,resdb)=>{
        if(erro) return res.send(erro)
        res.send(`{"items":${JSON.stringify(resdb)}}`)
    
    })
})


app.listen(3000,()=> console.log("Servidor ativo"))


