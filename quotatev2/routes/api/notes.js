const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

router.post('/quotes/:id/notes', notesCtrl.create)

module.exports = router