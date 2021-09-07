const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

router.get('/customerList', customerController.list );

module.exports = router;