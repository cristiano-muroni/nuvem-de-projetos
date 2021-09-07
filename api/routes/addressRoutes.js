const express = require('express');
const router = express.Router();
const addressController = require('../controllers/addressController');

router.get('addressList', addressController.addressList);

module.exports = router;