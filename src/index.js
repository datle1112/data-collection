// Initialize Express server
const express = require('express');
const port = process.env.PORT;
const path = require('path');

require('../src/db/mongodb'); // Connect to database "Data-collection"

const tempRoute = require('../src/router/temp');
const humidityRoute = require('../src/router/humidity');
const app = express();

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.json());
app.use(tempRoute);
app.use(humidityRoute);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});