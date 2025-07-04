// app.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const userRoutes = require('./routes/userRoutes'); // ✅ Import first


const app = express();

// Middleware
app.use(cors({
    origin: "http://localhost:5173", // your frontend origin
    credentials: true, // if using cookies
}));
app.use(express.json());

// Routes
app.use('/api/users', userRoutes); // ✅ Now it's defined above

module.exports = app;
