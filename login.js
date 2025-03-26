const express = require('express');
const app = express();

// Define a route for the login page
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

// Start the server
const port = 5500;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});


const userName = document.getElementById(user)
const userPassword = document.getElementById(pass)
const submitBtn = document.getElementById(button)

