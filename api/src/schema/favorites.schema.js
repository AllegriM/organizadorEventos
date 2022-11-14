const mongoose = require('mongoose')

const favoriteSchema = new mongoose.Schema({
    userFrom: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    
})

module.exports = new mongoose.model('Favorite', favoriteSchema)