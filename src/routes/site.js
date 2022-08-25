// một lớp không cụ thể như: home, search, contact,...

const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController'); // import controller

router.use('/search', siteController.search);
router.use('/', siteController.index);

module.exports = router;
