// model.js
const mongoose = require("mongoose");

const RegisterSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    special: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Register = mongoose.model('Register', RegisterSchema);
module.exports = Register;
