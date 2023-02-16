import express from 'express'
import ejs from 'ejs'
import dotenv from 'dotenv'
import conn from './db.js'


dotenv.config()
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.static('public'))

conn()


app.get('/', (req, res) =>{
    res.render('index')
})
app.get('/about', (req, res) =>{
    res.render('about')
})
app.listen(port, ()=> {
     console.log(`uygulama ${port} portunda basladi`)
 })