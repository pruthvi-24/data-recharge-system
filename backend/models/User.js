const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String, // In production, this should be hashed (e.g., bcrypt)
        required: true
    }
});

const User = mongoose.model('User', userSchema);
module.exports = User;
