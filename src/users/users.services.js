const userControllers = require('./users.controllers')

const getAllUsers = (req, res) => {
    const data = userControllers.findAllUsers()
    res.status(200).json(data)
}

const getUserByID = (req, res) => {
    const id = req.params.id
    const data = userControllers.findUserByID(id)

    if(data){
        res.status(200).json(data)
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postNewUser = (req, res) => {
    const {first_name, last_name, email, password, birthday} = req.body

    if(first_name){
        const data = userControllers.createNewUser({first_name, last_name, email, password, birthday})
        res.status(201).json(data)
    } else {
        res.status(400).json({message: 'Invalid data', fields: {
            first_name: 'string',
            last_name: 'string',
            email: 'string',
            password: 'string',
            birthday: 'string'
        }})
    }
}
module.exports = {
    getAllUsers,
    getUserByID,
    postNewUser
}