import express from 'express'
import cors from 'cors'
import db from './db/index.js'
import services from './services/index.js'


const server= express()
server.use(cors())
server.use(express.json())
server.use('/api',services)

const port = process.env.PORT || 5000


db.sync({alter:true}).then(()=>{
    server.listen(port, ()=> console.log('SERVER STARTED:' +port))
    server.on("error", (error)=>
    console.info("SERVER NOT RUNNING: ", error))
}).catch((e)=> console.log(e))