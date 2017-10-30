'use strict';
var axios = require('axios');
var config = require('../config/config');
var key = config.moviedbApiKey;

var redis = require('redis');

var client = redis.createClient();
//on client error it will send it to the front-end
client.on('error', function(err) {
  console.log('error ' + err.message);
});

//going to make the api request to moviedb's api and get the information
// before returning it to the react component
exports.get_movie = function(req, res) {
  client.hgetall(req.body.url, function(err, result) {
    if(result)
      res.json(result);
    else {
      axios.get(req.body.url)
        .then((data) => {
          let imdb = data.data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].content.imdb;
          let title = data.data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].publicPath;
          imdb.title = title;
          let trailerUrl = 'http://api.themoviedb.org/3/movie/' + imdb.id + '/trailers?api_key=' + key;
          axios.get(trailerUrl)
            .then((data)=> {
                let youtubeSource = data.data["youtube"][0].source;
                imdb.youtubeSource = "https://www.youtube.com/embed/" + youtubeSource;
                client.hmset(req.body.url, imdb);
                res.json(imdb);
            })
            .catch((err) => {
              res.json({err: err.message });
            });
        })
        .catch((err) => {
          res.json({ err: err.message });
        });
    }
  });
};
