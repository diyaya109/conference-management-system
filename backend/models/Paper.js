// models/Paper.js
const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
    title: { type: String, required: true },
    authors: { type: String, required: true },
    paper: { type: String, required: true } // URL or path to the paper file
});

module.exports = mongoose.model('Paper', paperSchema);