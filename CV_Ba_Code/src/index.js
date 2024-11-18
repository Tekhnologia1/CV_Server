require('dotenv').config();
const express = require('express');
const cors = require("cors");
const sql = require('./config/database');
const Router = require('./routes/routing');

const app = express();
app.use(cors()); // Call cors as a function
const PORT = process.env.PORT || 4000;

// Middleware to parse JSON requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Use the router
app.use('/', Router);

// Simple route
app.get("/", (req, res) => {
    res.json( "Welcome to Career Vidyalaya." );
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
