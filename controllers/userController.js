import User from '../models/User.js'

const createUser = async (req, res) => {
    try{
        const user = await User.create(req.body)
        res.status(201).send('user created')

    }catch (error){
        res.status(500).send(error)
    }
}

export {createUser}