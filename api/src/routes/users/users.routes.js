const { Router } = require('express')
const { registerUser, loginUser, authMe } = require('../../controllers/user.controller.js')
const validation = require('../../middlewares/validations')
const auth = require('../../middlewares/authJWT')

const router = Router()

router.get('/auth-me', auth.verifyToken, authMe)
router.post('/signup', validation.validateSignUp, registerUser)
router.post('/signin', validation.validateSingIn, loginUser)

module.exports = router