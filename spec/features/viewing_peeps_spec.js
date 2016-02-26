var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');

var Peep = require('../../models/peep');

describe('Viewing Peeps', function() {

  beforeEach(function(done) {
    var newPeep = new Peep({message: 'this is a test peep'});
    newPeep.save(function(err) {
      done();
    });
  });

  it('displays peeps from the database', function(done) {
    browser
      .url('/peeps')
      .getText('body', function(err, text) {
        expect(text).to.include('this is a test peep');
      })
      .call(done);
  });
});
