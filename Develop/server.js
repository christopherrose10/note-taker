const express = require('express');

const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

const { db } = require('./db/db');

app.get('/api/db', (req, res) => {
    let results = db;
    console.log(req.query)
    res.json(results);
});

function createNewNote(body, dbArray) {

    const db = body;
    dbArray.push(db);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ db: dbArray }, null, 2)
    );

    return db;
}

app.post('/api/db', (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = db.length.toString();

    // add animal to json file and animals array in this function
    const db = createNewNote(req.body, db);

    res.json(req.body);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});