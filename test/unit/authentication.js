const assert = require('chai').assert;
const faker = require('Faker');
const Authentication = require('../../src/authentication');

let authentication;
let mockClient = {
  success: faker.random.number(1, 100),
  failure: faker.random.number(101, 200),
  get: function(path) {
    if (path === '/v2/authentication.json') {
      return this.success;
    } else {
      return this.failure;
    }
  }
};

describe('Authentication Unit Test', function() {

  beforeEach(function() {
    authentication = new Authentication(mockClient);
  });

  it ('Should make API call to HTTP Client', function() {
    assert.equal(authentication.get(), mockClient.success);
  });

});
