// routes/paper.js
const express = require('express');
const Paper = require('../models/Paper');
const router = express.Router();

// Submit a Paper
router.post('/submit', async (req, res) => {
    const { title, authors, paper } = req.body;

    try {
        const newPaper = new Paper({ title, authors, paper });
        await newPaper.save();
        res.status(201).json({ message: 'Paper submitted successfully', paperId: newPaper._id });
    } catch (error) {
        res.status(500).json({ error: 'Error submitting paper' });
    }
});

// Get All Papers
router.get('/', async (req, res) => {
    try {
        const papers = await Paper.find();
        res.status(200).json(papers);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching papers' });
    }
});

module.exports = router;