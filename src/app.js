import express from "express"
import participantsRouter from './routes/participants_routes.js'
import dotenv from 'dotenv'
import setDbConnection from './config/connection.js'

import {fileURLToPath} from 'url'
import path, {dirname} from 'path'


dotenv.config()
const port = process.env.port
const api = process.env.API



const __dirname = dirname(fileURLToPath(import.meta.url))
//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//INITIALIZATION OF THE APPLICATION

const app = express()


//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//FOR POSTS REQUESTS
app.use(express.json())
app.use(express.urlencoded({extended:true}))

//""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
app.use(express.static(path.join(__dirname +'./public')))


//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
//ROUTES
app.use(`${api}/participants`, participantsRouter)


//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
setDbConnection()

//"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
app.listen(port, () => {
    console.log(`The application is running on ${port}`)
})