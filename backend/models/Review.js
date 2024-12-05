// models/Review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    paperId: { type: mongoose.Schema.Types.ObjectId, ref: 'Paper', required: true },
    reviewerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User ', required: true },
    reviewText: { type: String, required: true },
    rating: { type: Number, required: true } // e.g., 1 to 5
});

module.exports = mongoose.model('Review', reviewSchema);