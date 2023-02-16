import mongoose from 'mongoose'

const { Schema } = mongoose;

const photoSchema = new Schema({
    name:{
        type: String,
        trim: true,
        required: true
    },
    description:{
        type: String,
        tries: true,
        required: true
    },
    uploadedAt:{
        type: Date,
        default: Date.now
    }
});

const Photo = mongoose.model('Photo', photoSchema)
export default Photo