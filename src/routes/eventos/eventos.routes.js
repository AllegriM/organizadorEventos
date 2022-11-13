const { Router } = require('express') 
const { getEvents, getEventById, createEvent, updateEvent, deleteEvent, addToFavorite } = require('../../controllers/events.controller.js') 
const authJWT = require('../../middlewares/authJWT.js')

const router = Router()

router.get('/events', getEvents)
router.get('/events/:eventId', getEventById)
router.post('/events/:id', [authJWT.verifyToken], addToFavorite)
router.post('/events', [authJWT.verifyToken, authJWT.isNormalUser], createEvent)
router.put('/events/:id', [authJWT.verifyToken, authJWT.isNormalUser], updateEvent)
router.delete('/events/:id', [authJWT.verifyToken, authJWT.isNormalUser], deleteEvent)

module.exports =  router