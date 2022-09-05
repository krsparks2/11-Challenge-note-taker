const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
    deleteNote
} = require('../utils');

// GET request for notes
router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
  
// POST request to add a note
  router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
      const newNote = {
        title,
        text
      };

      readAndAppend(newNote, './db/db.json')
      res.json('note added')
    } else {
        res.error("error adding new note")
    }
});

router.delete('/notes/:id', (req, res) => {
    console.log(req.params);
    const result = deleteNote(req.params.id, notes);
    res.json(result);
});