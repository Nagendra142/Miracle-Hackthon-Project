// model.js
const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    vehicle:{
        type:String,
        required:true
    },
    phone: {
        type: Number,
        required: true
    },
    problem: {
        type: String,
        required: true
    },
    latitude:{
        type:Number,
        required:true
    },
    longitude:{
        type:Number,
        required:true
    }
    ,status:{
        type:Boolean,
        required:false
    }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
