import React from 'react';

export default () => {
  return (
    this.props.trailer ?
      <div className="movie-trailer container">
        <p>{this.props.trailer}</p>
      </div>
    : null
  )
}
