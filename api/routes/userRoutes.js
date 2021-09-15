const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user/create/admin', userController.createUserAdmin);
router.get('/users/registerUsersAdmin', userController.createViewUserAdmin);

module.exports = router;  