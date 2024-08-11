const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
    image: String,
    description: { type: String, required: true },
    room: String,
    date_posted: Date,
    user: String
});

const postModel = new mongoose.model("posts", postSchema);
module.exports =  postModel;