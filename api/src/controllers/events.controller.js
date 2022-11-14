const Events = require('../schema/eventos.schema.js')
const User = require('../schema/users.schema')

const getEvents = async (req, res, next) => {
    try {
        const allEvents = await Events.find()
        res.status(200).json({ events: allEvents })
    } catch (err) {
        res.json({ error: err })
    }
}

const getEventById = async (req, res) => {
    try {
        const event = await Events.findOne({ _id: req.params.eventId })
        if (req.params.eventId.length === 24 && !event) {
            res.status(400).json({ message: "Event dont exists, provide a valid id!" })
        }
        res.status(200).json({ event: event })
    }
    catch (err) {
        console.log({ error: err })
    }
}

const createEvent = async (req, res, next) => {
    const { publisher_id, title, category, description } = req.body
    try {
        const registerEvent = new Events({ publisher_id, title, category, description })
        await registerEvent.save()
        res.status(201).json({ evento: registerEvent })
    } catch (error) {
        res.json({ error: err })
    }
}

const updateEvent = async (req, res) => {
    const user = req.user
    const id = req.params.id
    const updatedData = req.body
    try {
        if (user._id.toString() === updatedData.publisher_id) {
            const updateEvent = await Events.findOneAndUpdate({ _id: id }, { ...updatedData }, {
                new: true
            })
            return res.status(204).json(updateEvent)
        }
        if (user._id.toString() !== updatedData.publisher_id) {
            return res.status(400).json({ message: "You don't have permission to update this event as it is not yours." })
        }
        res.status(401).json({ message: "You are not authorized to update this event" })
    } catch (error) {
        res.json({ error: err })
    }
}

const deleteEvent = async (req, res) => {
    const user = req.user
    const id = req.params.id
    try {
        if (id.length !== 24) {
            return res.status(404).json({ message: "Provide a valid id, id must be 24 characters long" })
        }
        const event = await Events.findOne({ _id: id })
        if (!event) {
            return res.status(404).json({ message: "Event not found" })
        }
        if (user._id.toString() === event.publisher_id.toString()) {
            await Events.deleteOne({ _id: id })
            return res.status(204).json({ message: "Event deleted successfully" })
        }
        res.status(401).json({ message: "You are not authorized to delete this event" })
    } catch (error) {
        res.json({ error: err })
    }
}

const addToFavorite = async (req, res) => {
    const eventId = req.params.id
    console.log(eventId)
    try {
        const selectedEvent = await Events.findOne({ _id: eventId })
        console.log(selectedEvent)
    } catch (error) {

    }
}

const removeFavorite = async (req, res) => {
    const event = req.body
    const eventId = req.body
    try {
        const selectedEvent = await Events.findOne({ _id: eventId })
        console.log(selectedEvent)
    } catch (error) {

    }
}


module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    addToFavorite,
    removeFavorite
}