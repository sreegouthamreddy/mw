const express = require('express');
const router = express.Router();
const instanceController = require('../controllers/instanceController');

router.post('/tomcat/start', instanceController.startInstance);
router.post('/tomcat/stop', instanceController.stopInstance);
router.get('/tomcat/status', instanceController.getInstanceStatus);

// Add routes for JBoss and Spring Boot similarly

module.exports = router;
