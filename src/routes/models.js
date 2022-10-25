const express = require('express')
const router = express.Router();
const modelsController = require('../controller/ModelController')


router.get('/:slug', modelsController.show)
router.get('/', modelsController.index)


module.exports = router;
