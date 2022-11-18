const Events = require("../schema/eventos.schema")
const User = require("../schema/users.schema")


const getMyFavorites = async (req, res, next) => {
    const user = req.user
    try {
        const userFavorites = user.favoriteEvents
        res.status(200).json({ userFavorites })
    } catch (error) {
        console.log(error)
    }
}

const addToFavorite = async (req, res, next) => {
    const user = req.user
    const eventId = req.params.id
    try {
        const selectedEvent = await Events.findOne({ _id: eventId })
        if (!selectedEvent) return (res.status(404).json({ message: "That event don't exists" }))
        if (!user.favoriteEvents.some(event => event._id.toString() === selectedEvent._id.toString())) {
            const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { $push: { favoriteEvents: selectedEvent } }, { new: true })
            res.status(201).json({ message: "Added event to favorites", updatedUser })
        } else {
            res.status(400).json({ message: "This event is already in your favorites" })
        }
        // Find user by id and add event to favoriteEvents array
    } catch (error) {
        console.log(error)
    }
}

const removeFavorite = async (req, res, next) => {
    const user = req.user
    const eventId = req.params.id
    try {
        const removedEvent = await Events.findOne({ _id: eventId })
        if (!removedEvent) return res.status(404).json({ message: "That event don't exits" })
        if (user.favoriteEvents.some(event => event._id.toString() === removedEvent._id.toString())) {
            const updatedUser = await User.findOneAndUpdate({ _id: user._id }, { $pull: { favoriteEvents: removedEvent } }, { new: true })
            res.status(202).json({ message: "Removed event from favorites", updatedUser })
        }
        res.status(404).json({ message: "That event is not in your favorites list." })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    addToFavorite,
    removeFavorite,
    getMyFavorites
}