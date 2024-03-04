const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    },
    email: {
        type: String,
        unique: true,
        required:true
    },
    password: {
        type: String,
        required:true
    },
    contactNumber: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true
    },
    dateOfBirth: {
        type: Date,
        required: true
    }
  
})

module.exports = mongoose.model("User", userSchema)
