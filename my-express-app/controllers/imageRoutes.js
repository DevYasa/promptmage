const express = require('express');
const router = express.Router();
const imageController = require('../controllers/imageController');

router.post('/generate-image', imageController.generateImage);

module.exports = router;
