const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    image: String,
    audio: String,
    video: String,
    description: { type: String, required: true },
    likes: Number,
    comments: Array,
    room: String,
    date_posted: String,
});

const postModel = new mongoose.model("users", postSchema);
module.exports =  postModel;