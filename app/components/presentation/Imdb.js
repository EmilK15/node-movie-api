import React, { Component } from 'react';

class Imdb extends Component {
  render() {
    return (
      this.props.url ?
        <div className="movie-info container">
          <p>{this.props.rating} out of 10</p>
          <p>{this.props.votes}</p>
          <a href={this.props.url}>Link to imdb</a>
        </div>
      : null
    )
  }
}

export default Imdb;
