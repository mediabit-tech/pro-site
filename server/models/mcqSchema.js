const mongoose = require('mongoose');

const mcqSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    subTitle: [{
        type: String
    },],
    mode: {
        type: String
    },
    choosenType: {
        type: String
    },
    optionA: {
        type: String
    },
    optionB: {
        type: String
    },
    optionC: {
        type: String
    },
    optionD: {
        type: String
    },
    correctAnswer: {
        type: String
    },
    description: {
        type: String
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
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: 'user'
    // }
})

const MCQInsight = mongoose.model('MCQ', mcqSchema);

module.exports = MCQInsight;