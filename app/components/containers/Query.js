import React, { Component } from 'react';
import axios from 'axios';

class Query extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url : ''
    };
  }

  urlChange(e) {
    this.setState({
      url: e
    });
  }

  render() {
    return (
      <div className="container url-query">
        <input className="input" type="text" placeholder="URL" required
          onChange={(e)=>this.urlChange(e)} />
      </div>
    )
  }

}

export default Query;
