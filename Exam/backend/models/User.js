const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    profileImg: {
        type: String,
        required: true
    },
    profileCoverImg: {
        type: String,
        required: true
    },
    friends: [{
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }]
})

const User = mongoose.model('User', userSchema);

module.exports = User;