import React, { Component }from 'react';

class Trailer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      this.props.youtubeCode ?
        <iframe className="movie-trailer" src={this.props.youtubeCode}>
        </iframe>
      : null
    )
  }
}
export default Trailer;
