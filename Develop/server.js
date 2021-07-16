const express = require('express');

const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

const { notes } = require('./db/db');

app.get('/api/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

function findById(id, notesArray) {
    const result = notesArray.filter(notes => notes.id === id)[0];
    return result;
};

function createNewNote(body, notesArray) {

    const notes = body;
    notesArray.push(notes);

    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return notes;
}

app.post('/api/notes', (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // add animal to json file and animals array in this function
    const notes = createNewNote(req.body, notes);

    res.json(req.body);
});

//routes html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

//wildcard routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});