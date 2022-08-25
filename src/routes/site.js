// một lớp không cụ thể như: home, search, contact,...

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController'); // import controller

router.get('/search', siteController.search);
router.get('/', siteController.index);

module.exports = router;
