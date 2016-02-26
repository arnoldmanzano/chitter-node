var express = require('express');
var router = express.Router();
var Peep = require('../models/peep');

router.get('/', function(req, res) {
  Peep.find().exec(function(err, peeps) {
    res.render('peeps/index', { title: 'Chitter', peeps: peeps, user: req.user });
  });
});

module.exports = router;
