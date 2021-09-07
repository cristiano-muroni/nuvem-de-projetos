const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/userList', userController.listUser);

module.exports = router;  