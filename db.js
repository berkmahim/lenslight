import mongoose from 'mongoose'
mongoose.set('strictQuery',false)
const conn = () =>{
    mongoose.connect(process.env.DB_URI, {
        dbName: 'lenslight',
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
        console.log('dbye baglandi')
    })
        .catch((err)=>{
        console.log(`db connection err: ${err}`)
    })
}

export default conn