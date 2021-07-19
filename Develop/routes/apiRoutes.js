const router = require('express').Router();
const fs = require('fs');
const path = require('path');
const UUID = require("uuid");

let notes = require('../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    let request = req.body;
    req.body.id = UUID.v1();
    notes.push(request);
    res.json(notes);

    fs.writeFileSync(path.join(__dirname, '../db/db.json'), JSON.stringify(notes));
});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    let deletedId = notes.find(notes => notes.id === id);
    if (deletedId) {
        notes = notes.filter(notes => notes.id != id)
        res.end();
        res.status(200);
    } else {
        res.status(404);
    }
})

module.exports = router;