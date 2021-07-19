const path = require('path');
const router = require('express').Router();

//routes html
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// //wildcard routes
// router.get('*', (req, res) => {
//     res.sendFile(path.join(__dirname, '../public/index.html'));
// });

module.exports = router;