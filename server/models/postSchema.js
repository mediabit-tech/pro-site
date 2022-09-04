const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: {
        type: String
    },
    message: [{
        type: String
    }],
    inputOptionalMessage: [{
        type: String
    }],
    codingSnippet: {
        type: String
    },
    outputOptionalMessage: [{
        type: String
    }],
    category: [
        {
            type: String,
            required: true
        }
    ],
    tag: [{
        type: String
    }],
    mode: {
        type: String,
        required: true
    },
    askingCompany: {
        type: String
    },
    askingYear: {
        type: Number
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