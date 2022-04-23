const router = require('express').Router();
const { noteData } = require('../../data/db.json');
const noteLogic = require('../../db/notes.js');

// need to revisit 
router.get("/notes", (req, res) => {
    noteLogic
    .getNotes()
    .then((notes) => {
        return res.json(notes);
    })
    .catch ((error) => res.status(500).json(error));
});

// need to revisit validateAnimal
router.post("/notes", (req, res) => {
    noteLogic
    .saveNote(req.body)
    .then((notes) => {
        return res.json(notes);
    })
    .catch ((error) => res.status(500).json(error));
});

module.exports = router; 


// need to revisit - findById - DO NOT NEED TO FIND BY ID _ NO SEARCH 
// router.get("/notes/:id", (req, res) => {
//     const result = findById(req.params.id, notes);
//     if (result) {
//         res.json(result);
//     } else {
//         res.send(404);
//     }
// });