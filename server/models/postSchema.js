const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    category: [
        {
            type: String,
            required: true
        }
    ],
    tag: [
        {
            type: String,
            required: true
        }
    ],
    mode: {
        type: String,
        required: true
    },
    askingCompany: {
        type: String,
        required: true
    },
    askingYear: {
        type: Number,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    // user: {
    //     type: mongoose.Schema.ObjectId,
    //     ref: 'User',
    //     required: true
    // }
})

const Post = mongoose.model('Post', postSchema);

module.exports = Post;