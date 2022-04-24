const router = require('express').Router();
const noteData = require('../../db/db.json');
const fs = require('fs');
const { nanoid } = require('nanoid');
// const noteLogic = require('../../db/notes.js');

router.get("/notes", (req, res) => {
    return res.json(noteData);
});

router.post("/notes", (req, res) => {
    req.body.id = nanoid();
    console.log(req.body.id);
    noteData.push(req.body);
    fs.writeFile('./db/db.json', JSON.stringify(noteData), err => {
        if (err) {
            res.send(404);
        } else {
            res.send('Success');
        }
    })
});

module.exports = router; 
