const router = require('express').Router();
// const UUID = require("uuid");

let notes = require('../db/db');

router.get('/notes', (req, res) => {
    res.json(notes);
});

router.post('/notes', (req, res) => {
    // req.body.id = UUID.v1();

    // fs.readFile('./db/db.json', 'utf8', (err, data) => {
    //     let noteDis = JSON.parse(data);
    //     noteDis.push(req.body);

    //     fs.writeFile('./db/db.json', JSON.stringify(noteDis), (err) => {
    //         if (err) throw err;
    //         res.json(req.body);
    //     });
    // })

    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

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

module.exports = router;