const router = require('express').Router();
const { notes } = require('../../data/db.json');

// need to revisit filterByQuery 
router.get("/notes", (req, res) => {
    let results = notes;
    if (req.query) {
        results = filterByQuery(req.query, results);
    }
    res.json(results);
});

// need to revisit - findById
router.get("/notes/:id", (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
});

// need to revisit validateAnimal
router.post("/notes", (req, res) => {
  // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    if (!validateAnimal(req.body)) {
        res.status(400).send("The animal is not properly formatted.");
    } else {
        const animal = createNewAnimal(req.body, notes);
        res.json(animal);
    }
});

module.exports = router; 