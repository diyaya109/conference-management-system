// server.js

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); // Load environment variables from .env file

// Create an instance of the Express app
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/conferenceDB'; // Replace with your actual database name
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error('MongoDB connection error:', err));

// Import routes
const userRoutes = require('./routes/user');
const paperRoutes = require('./routes/paper');
const reviewRoutes = require('./routes/review');

// Use routes
app.use('/api/users', userRoutes);
app.use('/api/papers', paperRoutes);
app.use('/api/reviews', reviewRoutes);

// Define a welcome route
app.get('/', (req, res) => {
    res.send('Welcome to the Conference Management System API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});