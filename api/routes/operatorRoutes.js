const express = require('express');
const router = express.Router();
const operatorController = require('../controllers/operatorController');

router.get('/operatorList', operatorController.operatorList);


module.exports = router;