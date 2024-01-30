const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('hello, you\'ve GET "/"')
});

module.exports = router;
