// Import required modules
const express = require('express');

// Create an instance of Express
const app = express();

// Define a route for the root URL
app.get('/', (req, res) => {
    res.send('bmi-calculator-master');
});

// Set up the server to listen on a port
const port = 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
