const User = require("../schema/users.schema")
const bcrypt = require('bcrypt')

const validateSignUp = async (req, res, next) => {
    const { email, role } = req.body
    const user = await User.findOne({ email })

    if (user) {
        return res.status(409).json({ message: "User email already exists" })
    }

    if (role !== 1 && role !== 2) {
        return res.status(404).json({ message: "Invalid role number" })
    }

    next()
}

const validateSingIn = async (req, res, next) => {
    const { email, password } = req.body

    const userFound = await User.findOne({ email })

    if (!userFound) {
        return res.status(401).json({ message: "User not found" })
    }
    const matchPassword = await bcrypt.compare(password, userFound.password)
    if (!matchPassword) {
        return res.status(404).json({ message: "Invalid password" })
    }

    req.user = userFound

    next()
}

module.exports = {
    validateSignUp,
    validateSingIn
}