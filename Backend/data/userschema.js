const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    about: String,
    gender: String,
    links: Array,
    rooms: Array, 
    role: String  //Artist or organization
});

const userModel = new mongoose.model("users", userSchema);
module.exports =  userModel;