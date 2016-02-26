var express = require('express');
var router = express.Router();

var User = require('../models/user');

router.get('/new', function(req, res) {
  res.render('users/new');
});

router.post('/', function(req, res) {
  var user = new User({username: req.body.username, password: req.body.password});
  user.save();
  res.redirect('/peeps');
});

module.exports = router;
