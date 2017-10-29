'use strict';
var axios = require('axios');

exports.read_movie = function(req, res) {
  axios.get(req.body.url)
    .then((data) => {
      let imbd = data.data._embedded["viaplay:blocks"][0]._embedded["viaplay:product"].content.imdb
      res.json(imbd);
    })
    .catch((err) => {
      console.log('err is ' + err);
    });
};
