// index.js
// const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const cors = require("cors");
// const io = require('socket.io')(4000);
const Register = require("./models/serviceModel");
const Order=require("./models/ordersModel");

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({ message: "Hello, GET methods" });
});

//getting mechanics details

app.get('/mechanics',async (req,res)=>{
    try{
    const response=await Register.find({});
    res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({error:'failed to fetch mechanics'})
    }
})

// orders from customers

app.get('/orders',async (req,res)=>{
    try{
    const response=await Order.find({});
    res.status(200).json(response);
    }
    catch(error){
        res.status(500).json({error:'failed to fetch mechanics'})
    }
})

// registering the mechanic

app.post('/register', async (req, res) => {
    const { name, phone, email, experience, price, special, password,cpassword, username } = req.body;

    try {
        // const hashedPass=bcrypt.hash(password,10);
        // const hashedPass1=bcrypt.hash(cpassword,10);
        const registeredData = await Register.create({ name, phone, email, experience, price, special, password,cpassword, username });
        res.status(200).json(registeredData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Registration failed" });
    }
});


// posting the order details into database 

app.post('/book', async (req, res) => {
    const { name, phone, vehicle,latitude,longitude,problem,status} = req.body;

    try {
        
        const registeredData = await Order.create({name, phone, vehicle,latitude,longitude,problem ,status});
        res.status(200).json(registeredData);
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Registration failed" });
    }
});

// accepting order 

app.post('/accept', async (req, res) => {
    try {
      const { id } = req.body;
  
      // Update the status of the order with the given id to true
      const updatedOrder = await Order.findOneAndUpdate(
        { _id: id }, // Find the order by its id
        { $set: { status: true } }, // Set the status to true
        { new: true } // Return the updated document
      );
  
      // Check if the order was found and updated successfully
      if (updatedOrder) {
        // Respond with the updated order data
        res.status(200).json(updatedOrder);
      } else {
        // If the order was not found, respond with an error
        res.status(404).json({ error: "Order not found" });
      }
    } catch (err) {
      // If an error occurs during the update operation or any other operation, respond with a server error
      console.error(err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

// login of mechanic

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Register.findOne({ username: username });
        if (!user) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const validPassword = await password=== user.password;
        if (!validPassword) {
            return res.status(401).json({ error: "Invalid username or password" });
        }
        const token = jwt.sign({ userId: user._id }, 'secret_key'); 
        res.status(200).json({ token });
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Login failed" });
    }
});

const PORT = process.env.PORT || 30021;
const MONGO_URL = process.env.MONGO_URL;

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Mongo connected and Server Started at ${PORT}`);
        });
    })
    .catch(error => console.log(error));
