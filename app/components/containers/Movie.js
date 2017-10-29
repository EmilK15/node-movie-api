import React, { Component } from 'react';

//this might be a 'dummy' component later having vars passed down to it
//will come back later to change this
class Movie extends Component {

  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="container movie-container">
        <div className="movie-trailer">
          <p>a movie</p>
        </div>
        <div className="movie-description">
          <p>movie description</p>
        </div>
      </div>
    )
  }
}

export default Movie;
