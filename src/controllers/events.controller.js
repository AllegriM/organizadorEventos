const Events = require('../schema/eventos.schema.js') 

const getEvents = async(req, res, next) => {
    try {
        const allEvents = await Events.find()
        res.json({
            events: allEvents
        })
    } catch (err) {
        res.json({
            error: err
        })
    }
}

const getEventById = async(req, res) => {   
    try {
        const event = await Events.find({publisher_id: req.params.eventId})
        res.json({
            event: event
        })
    }
    catch (err) {
        res.json({
            error: err
        })
    }
}

const createEvent = async(req, res, next) => {
    const {publisher_id, title, category, description} = req.body
    try {
        const registerEvent = new Events({publisher_id, title, category, description})
        await registerEvent.save()
        res.status(201).json({evento: registerEvent})
    } catch (error) {
        res.json({
            error
        })
    }
}

const updateEvent = async(req, res) => {
    const user = req.user
    const id = req.params.id
    const updatedData = req.body
    console.log(updatedData)
    try {
        if (user._id.toString() === updatedData.publisher_id) {
            const updateEvent = await Events.findOneAndUpdate({_id: id}, {...updatedData}, {
                new: true
            })
            return res.status(204).json(updateEvent)
        }
        if (user._id.toString() !== updatedData.publisher_id){
            return res.status(401).json({message: "You don't have permission to update this event as it is not yours."})
        }
        res.status(401).json({message: "You are not authorized to update this event"})
    } catch (error) {
        res.json({
            error
        })
    }
}

const deleteEvent = async(req, res) => {

}

const addToFavorite = async(req, res) => {

}



module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent,
    addToFavorite
}