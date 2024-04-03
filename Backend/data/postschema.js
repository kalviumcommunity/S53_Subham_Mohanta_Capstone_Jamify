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
    date_posted: Date,
});

const postModel = new mongoose.model("posts", postSchema);
module.exports =  postModel;