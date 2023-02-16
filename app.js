import express from 'express'
import ejs from 'ejs'
import dotenv from 'dotenv'
import conn from './db.js'
import router from './routes/pageRoute.js';
import pageRoute from "./routes/pageRoute.js";
import photoRoute from "./routes/photoRoute.js";
import userRoute from "./routes/userRoute.js";



dotenv.config()
conn()
const port = process.env.PORT
const app = express()


app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))



app.use('/',pageRoute)
app.use('/photos',photoRoute)
app.use('/users',userRoute)


app.listen(port, ()=> {
     console.log(`uygulama ${port} portunda basladi`)
 })