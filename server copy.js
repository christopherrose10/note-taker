const express = require('express');
const fs = require('fs');

const apiRoutes = require('./Develop/routes/apiRoutes');
const htmlRoutes = require('./Develop/routes/htmlRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

// parse incoming JSON data
app.use(express.json());
// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));

// parse incoming CSS and JS data
app.use(express.static('public'));

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});