const express = require('express');
const router = express.Router();

require('../db/connection');
const MCQ = require('../models/mcqSchema');

// submit mcq route
router.post('/submitmcq', async (req, res) => {
    // get info from body
    const { title, subTitle, mode, choosenType, optionA, optionB, optionC, optionD, correctAnswer, description } = req.body;
    // validation
    if (!title || !correctAnswer) {
        return res.status(422).json({ error: "Fill the input filed properly!" });
    }

    try {
        const mcq = new MCQ({ title, subTitle, mode, choosenType, optionA, optionB, optionC, optionD, correctAnswer, description });

        await mcq.save();
        res.status(201).json({ message: "New mcq successfully uploaded!" });
    } catch (err) {
        console.log(err);
    }
});

// fetch all post route
router.get('/get-mcqinsights', async (req, res) => {
    try {
        const allMCQ = await MCQ.find();

        if (!allMCQ) {
            return res.status(404).json({ error: "Any MCQ isn't found!" });
        }
        res.status(200).send(allMCQ).json({ message: "All MCQs fetched successfully!" });
        // console.log(allPost);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;