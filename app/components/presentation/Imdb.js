import React, { Component } from 'react';

class Imdb extends Component {
  render() {
    return (
      this.props.url ?
        <div className="movie-info container">
          <b>Rating</b><p>{this.props.rating} out of 10</p>
          <p>{this.props.votes.split(" ")[0]} <span className="glyphicon glyphicon-thumbs-up"></span></p>
          <p>{this.props.votes.split(" ")[1]} <span className="glyphicon glyphicon-thumbs-down"></span></p>
          <a href={this.props.url}>Link to imdb</a>
        </div>
      : null
    )
  }
}

export default Imdb;
