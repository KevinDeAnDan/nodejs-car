const express = require('express');
const router = express.Router();

const itemController = require('../controller/ItemController');

router.get('/create', itemController.create);
router.post('/store', itemController.store);

router.get('/:slug', itemController.show);

module.exports = router;