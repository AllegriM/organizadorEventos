const { Router } = require('express') 
const { registerUser, loginUser } = require('../../controllers/user.controller.js') 
const validation = require('../../middlewares/validations')

const router = Router()

router.post('/signup', validation.validateSignUp, registerUser)
router.post('/signin', validation.validateSingIn, loginUser)

module.exports =  router