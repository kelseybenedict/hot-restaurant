// dependencies 
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables = [];
const waitList = [];
// {
// "customerName": "Ahmed",
// "customerEmail": "afhaque89@gmail.com",
// "customerID": "afhaque89",
// "phoneNumber": "979-587-0887"
// }

// routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/reservation', (req, res) => res.sendFile(path.join(__dirname, 'reservation.html')));

// Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));