const assert = require('chai').assert;
const faker = require('Faker');
const Feedbin = require('../../src/index');

let feedbin;

describe('Authentication Integration Test', function() {
  beforeEach(function() {
    if (process.env.FEEDBIN_USERNAME && process.env.FEEDBIN_PASSWORD) {
      feedbin = new Feedbin(process.env.FEEDBIN_USERNAME, process.env.FEEDBIN_PASSWORD);
    } else {
      this.skip();
    }
  });

  it ('Should authenticate with valid credentials', function() {
    return feedbin.authentication.get().then(function(data) {
      assert.equal(data, '', "User could not be authenticated");
    });
  });

  it ('Should not authenticate with invalid credentials', function() {

    feedbin = new Feedbin(faker.Internet.email(), faker.Lorem.words(1));

    return feedbin.authentication.get().then().catch(function(err) {
      assert.instanceOf(err, Error, 'Error object not found');
    });
  });

});
