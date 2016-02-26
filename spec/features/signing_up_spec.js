var chai = require('chai');
var expect = chai.expect;
var mongoose = require('mongoose');

var User = require('../../models/user');

describe('Signing up', function() {

  beforeEach(function(done) {
    User.collection.drop();
    done();
  });

  afterEach(function(done) {
    User.collection.drop();
    done();
  });

  it('allows a user to sign up to chitter', function(done) {
    browser
      .url('/users/new')
      .setValue('#username', 'arnold')
      .setValue('#password', 'mypassword')
      .submitForm('#signup-form')
      .getUrl(function(err, url) {
        expect(url).to.include('/peeps');
      })
      .getText('body', function(err, text) {
        expect(text).to.include('logged in as arnold');
      })
      .call(function() {
        User.count({}, function(err, count) {
          expect(count).to.equal(1);
          done();
        });
      });
  });
});
