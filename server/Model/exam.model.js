const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const Schema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter the pets name"],
        minLength: [3, "The pets name must be at least 3 characters"],
        unique: true
    },
    type: {
        type: String,
        required: [true, "Please enter the type of the pet!"],
        minLength: [3, "The type of the pet must be at least 3 characters"]
    },
    description: {
        type: String,
        required: [true, "Describe your pet..."],
        minLength: [3, "The pet description must be at least 3 characters"]
    },
    skill1: {
        type: String
    },
    skill2: {
        type: String
    },
    skill3: {
        type: String
    },
    likes: {
        type: Number,
        default: 0
    }
}, {timestamps: true})

Schema.plugin(uniqueValidator, {message: "This name is taken"});

module.exports = mongoose.model('Pet', Schema);