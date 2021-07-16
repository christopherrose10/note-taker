const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

const { db } = require('./db/db');

app.get('/api/db', (req, res) => {
    let results = db;
    console.log(req.query)
    res.json(results);
})

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });