// routes/review.js
const express = require('express');
const Review = require('../models/Review');
const router = express.Router();

// Submit a Review
router.post('/submit', async (req, res) => {
    const { paperId, reviewerId, reviewText, rating } = req.body;

    try {
        const newReview = new Review({ paperId, reviewerId, reviewText, rating });
        await newReview.save();
        res.status(201).json({ message: 'Review submitted successfully', reviewId: newReview._id });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting review' });
    }
});

// Get Reviews for a Paper
router.get('/:paperId', async (req, res) => {
    const { paperId } = req.params;

    try {
        const reviews = await Review.find({ paperId }).populate('reviewerId', 'username');
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching reviews' });
    }
});

module.exports = router;