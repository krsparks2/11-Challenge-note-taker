const router = require('express').Router();
const {
    readFromFile,
    readAndAppend,
} = require('../utils');

router.get('/notes', (req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
});
  
  router.post('/notes', (req, res) => {
    const { title, text } = req.body;
    if (title && text) {
      const newNote = {
        title,
        text
      };

      readAndAppend(newNote, './db/db.json')
      res.json('Note Added')
    } else {
        res.error("Error Adding Note")
    }
});

module.exports = router