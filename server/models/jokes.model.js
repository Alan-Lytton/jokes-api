const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String
    },
    punchLine: {
        type: String
    },
    createdAt:{
        type: Date
    },
    updatedAt:{
        type: Date
    }
});

const Joke = mongoose.model('joke', JokeSchema);

module.exports = Joke;