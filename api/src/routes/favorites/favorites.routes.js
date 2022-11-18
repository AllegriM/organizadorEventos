const { Router } = require('express')
const { addToFavorite, removeFavorite, getMyFavorites } = require('../../controllers/favorites.controllers')
const validation = require('../../middlewares/authJWT')

const router = Router()

router.get('/', validation.verifyToken, getMyFavorites)
router.put('/add/:id', validation.verifyToken, addToFavorite)
router.put('/remove/:id', validation.verifyToken, removeFavorite)


module.exports = router