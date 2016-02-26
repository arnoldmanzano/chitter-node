var express = require('express');
var router = express.Router();

router.get('/new', function(req, res) {
  res.render('users/new');
});

router.post('/', function(req, res) {
  // req.body.username
  // req.body.password
  res.redirect('/peeps')
});

module.exports = router;
