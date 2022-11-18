const mongoose = require("mongoose");
const bcrypt = require('bcrypt'); 

const UserSchema = new mongoose.Schema({
    name: { type: String, require: true},
    role: {type: Number, require: true, default: 1},
    email: { type: String, require: true, unique: true},
    password: { type: String, require: true},
    favoriteEvents: {type: Array}
}, {
    timestamps: true,
    versionKey: false
})

UserSchema.statics.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

UserSchema.statics.comparePassword = async (password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}


module.exports = mongoose.model('Users', UserSchema)