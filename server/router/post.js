const express = require('express');
const router = express.Router();

require('../db/connection');
const Post = require('../models/postSchema');

router.get('/', (req, res) => {
    res.send("This is home from post.js!");
});

// submit post route
router.post('/submitpost', async (req, res) => {
    // get info from body
    const { title, subTitle, message, inputOptionalMessage, codingSnippet, outputOptionalMessage, category, tag, mode, askingCompany, askingYear } = req.body;
    // validation
    if (!title || !codingSnippet || !category || !mode || !askingCompany ) {
        return res.status(422).json({ error: "Fill the input filed properly!" });
    }

    try {
        // already existance
        const postExist = await Post.findOne({ title: title });

        if (postExist) {
            return res.status(422).json({ error: "Post already exists. Duplicacy is not allowed!" });
        } else {
            // If not already exists then store all info into a variable
            const post = new Post({ title, subTitle, message, inputOptionalMessage, codingSnippet, outputOptionalMessage, category, tag, mode, askingCompany, askingYear });
            // write a function for hashing the password before call save() method
            await post.save();
            res.status(201).json({ message: "New post successfully uploaded!" });
        }
    } catch (err) {
        console.log(err);
    }
});

// fetch all post route
router.get('/get-posts', async (req, res) => {
    try {
        const allPost = await Post.find();

        if (!allPost) {
            return res.status(404).json({ error: "Any post isn't found!" });
        }
        res.status(200).send(allPost).json({ message: "All post fetched successfully!" });
        console.log(allPost);
    } catch (err) {
        console.log(err);
    }
});

// fetch post id route
router.get('/get-posts/:id', async (req, res) => {
    try {
        const postId = await Post.findById(req.params.id);

        if (!postId) {
            return res.status(404).json({ error: "Post Id isn't found!" });
        }
        res.status(200).send(postId).json({ message: "Post Id fetched successfully!" });
        console.log(postId);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;