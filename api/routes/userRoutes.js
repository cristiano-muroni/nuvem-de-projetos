const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/users/create/admin', userController.createUserAdmin);
router.get('/users/createUsersAdmin', userController.createViewUserAdmin);
router.get('/users/listUsers', userController.listAllUsers);
router.post('/users/updateUsers/:id', userController.editUsers);
router.get('/users/editViewUsers/:id', userController.editViewUsers);
router.get('/users/deleteUsers/:id', userController.deleteUsers);

module.exports = router;  