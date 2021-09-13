const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController')

router.get('/project/create', projectController.createProject);
router.get('/projects/project', projectController.createViewProject);

module.exports = router;