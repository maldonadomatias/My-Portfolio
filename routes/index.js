var express = require('express');
const mainController = require('../controllers/mainController');
var router = express.Router();

/* GET home page. */
router.get('/', mainController.index);
router.post('/contact', mainController.mail);

router.get('/thanks', mainController.thanks)

module.exports = router;
