var chai = require('chai');
var expect = chai.expect;

describe('Signing up', function() {

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
      .call(done);
  });
});
