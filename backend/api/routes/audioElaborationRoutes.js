const express = require('express');
const router = express.Router();
const audioElaborationController = require('../controllers/audioElaborationController');

router.post('/upload', audioElaborationController.uploadAudio);

module.exports = router;