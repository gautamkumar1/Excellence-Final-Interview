const mongoose = require('mongoose');
const User = require('../models/userSchema')
const MongoUrl = "mongodb+srv://gautamraaz936:gautam@cluster0.z3olmee.mongodb.net/"
const connectDb = async () =>{
    try {
        await mongoose.connect(MongoUrl)
    console.log("Mongodb Connected Successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDb