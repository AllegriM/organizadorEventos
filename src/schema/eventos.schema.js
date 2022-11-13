const mongoose = require("mongoose");

const EventosSchema = new mongoose.Schema({
    publisher_id: {type: mongoose.Schema.Types.ObjectId, required: true},
    title: {type: String, require: true},
    category: {type: String},
    description: {type: String},
    image: {type: String},
    day: {type: Date},
}, {
    timestamps: true,
    versionKey: false
})

module.exports =  mongoose.model('Events', EventosSchema)