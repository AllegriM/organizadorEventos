const mongoose = require("mongoose") 
const User = require('../schema/users.schema.js') 
const dotenv = require('dotenv') 
const bcrypt = require('bcrypt') 
const jwt = require("jsonwebtoken")

dotenv.config();

const connectToDatabase = () => {
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log(`Connected succesfully to MongoServer!!`)
    } catch (err) {
        throw err
    }
}

const registerUser = async(req, res) => {

    const {name, lastname, role, email, password} = req.body

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({name, lastname, role, email, password: hashedPassword, favoriteEvents: []})

    await newUser.save()
    res.status(201).json({message: "User created succesfully", user: newUser})
}

const loginUser = async(req, res) => {   
    const user = req.user

    const token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {expiresIn: 86400})
    res.status(200).json({token, user})
}

module.exports = {
    connectToDatabase,
    registerUser,
    loginUser
}