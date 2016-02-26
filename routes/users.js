var express = require('express');
var passport = require('passport');
var router = express.Router();
var User = require('../models/user');

router.get('/new', function(req, res) {
  res.render('users/new', {});
});

router.post('/new', function(req, res) {
  User.register(new User({ username : req.body.username }), req.body.password, function(err, user) {
      if (err) {
          return res.render('users/new', { user : user });
      }
      passport.authenticate('local')(req, res, function () {
          res.redirect('/peeps');
      });
  });
});

module.exports = router;
