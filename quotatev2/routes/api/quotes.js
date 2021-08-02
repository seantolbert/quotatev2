const express = require('express');
const router = express.Router();
const quotesCtrl = require('../../controllers/api/quotes');

/* GET /api/puppies */
router.get('/', quotesCtrl.index);
router.post('/', quotesCtrl.create);
router.get('/:id', quotesCtrl.show);
router.put('/:id', quotesCtrl.update);
router.delete('/:id', quotesCtrl.delete)

module.exports = router;
