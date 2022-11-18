const User = require('../schema/users.schema')
const jwt = require('jsonwebtoken')

const verifyToken = async (req, res, next) => {
    try {
        const token = req.headers["authorization"]

        if (!token) return res.status(403).json({ message: "No token provided" })

        const decoded = jwt.verify(token, process.env.SECRET_KEY)
        req.userId = decoded.id

        const user = await User.findById(req.userId, { password: 0 })

        if (!user) return res.status(404).json({ message: "No user found" })

        req.user = user

        next()
    } catch (error) {
        return res.status(401).json({ message: "Unauthorized" })
    }

}

const isNormalUser = async (req, res, next) => {
    const user = await User.findById(req.userId)

    if (user.role === 1) return res.status(401).json({ message: "Require publisher role to perform this task" })

    next()
}

module.exports = { verifyToken, isNormalUser }