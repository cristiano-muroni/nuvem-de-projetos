const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/user/create/admin', userController.createUserAdmin);
router.get('/users/createview/admin', userController.createViewUserAdmin);
router.get('/users/listViewUsers', userController.listViewUsers);
router.get('/users/listUsers', userController.listAllUsers);

module.exports = router;  