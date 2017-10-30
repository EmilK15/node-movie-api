'use strict';
var axios = require('axios');
var config = require('../config/config');
var key = config.moviedbApiKey;

//going to make the api request to moviedb's api and get the information
// before returning it to the react component
exports.get_movie = function(req, res) {
  axios.get(req.body.url)
    .then((data) => {
      let imdb = data.data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].content.imdb;
      let title = data.data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].publicPath;
      imdb.title = title;
      res.json(imdb);
    })
    .catch((err) => {
      res.json({ err });
    });
};
//this is the underlying url link to get the trailer
exports.get_trailer = function(req, res) {
  let trailerUrl = 'http://api.themoviedb.org/3/movie/' + req.body.movieId + '/trailers?api_key=' + key;
  axios.get(trailerUrl)
    .then((data) => {
      let youtubeSource = data.data["youtube"][0].source;
      console.log(youtubeSource);
      res.json(youtubeSource);
    })
    .catch((err) => {
      res.json({err})
    });
};
