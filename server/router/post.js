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
    const { title, subTitle, message, codingSnippet, optionalMessage, category, tag, mode, askingCompany, askingYear } = req.body;
    // validation
    if (!title || !message || !codingSnippet || !category || !tag ||!mode || !askingCompany || !askingYear) {
        return res.status(422).json({ error: "Fill the input filed properly!" });
    }

    try {
        // already existance
        const postExist = await Post.findOne({ title: title });

        if (postExist) {
            return res.status(422).json({ error: "Post already exists. Duplicacy is not allowed!" });
        } else {
            // If not already exists then store all info into a variable
            const post = new Post({ title, subTitle, message, codingSnippet, optionalMessage, category, tag, mode, askingCompany, askingYear });
            // write a function for hashing the password before call save() method
            await post.save();
            res.status(201).json({ message: "New post successfully uploaded!" });
        }
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;