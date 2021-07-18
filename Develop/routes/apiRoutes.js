const router = require('express').Router();

let notes = require('../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    // add animal to json file and animals array in this function
    const notes = createNewNote(req.body, notes);

    res.json(req.body);
});

router.delete('/notes/:id', (req, res) => {
    const { id } = req.params;
    let deletedId = notes.find(notes => notesid === id);
    if (deletedId) {
        notes = notes.filter(notes => notes.id != id)
        res.end();
        res.status(200);
    } else {
        res.status(404);
    }
})

module.exports  = router;