const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController')

router.get('/projectList', projectController.listProject);

module.exports = router;