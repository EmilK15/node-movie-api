var request = require('request');
var assert = require('assert');
var server = require('../index.js');

var base_url = "httpe://localhost:3000/";

describe("query page", function() {

  describe("get /", function() {
    it("returns status code 200", function() {
      request.get(base_url, function(err, res) {
        assert.equal(200, res.statusCode);
        server.closeServer();
        done();
      });
    });
  });

});
