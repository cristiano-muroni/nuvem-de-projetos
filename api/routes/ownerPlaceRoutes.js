const express = require('express');
const router = express.Router();
const ownerPlaceController = require('../controllers/ownerPlaceController')

router.get('/ownerList', ownerPlaceController.listOwnerPlace);

module.exports = router;