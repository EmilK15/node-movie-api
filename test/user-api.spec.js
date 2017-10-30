var request = require('request');
var assert = require('assert');
var server = require('../index.js');

var base_url = "http://localhost:3000/";

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

  describe("get /api/movie for sing", function() {
    let movieUrl = "https://content.viaplay.se/pc-se/film/sing-2016";
    let movieTitle = "sing-2016";
    let movieImdb = "tt3470600";
    let movieRating = "7.1";
    let movieTrailerUrl = "http://www.imdb.com/title/tt3470600?ref_ext_viaplay";
    let movieYouTubeLink = "https://www.youtube.com/watch?v=9zXiaDhAEwY"
    it("first movieUrl request", function() {
      request.post(base_url + '/api/movie', function(err, res) {
        assert.equal(movieTitle, res.title);
        assert.equal(movieImdb, res.id);
        assert.equal(movieRating, res.rating);
        assert.equal(movieTrailerUrl, res.url);
        server.closeServer();
        done();
      });
    });

  });

});
