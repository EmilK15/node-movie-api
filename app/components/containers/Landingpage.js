import React, { Component } from 'react';
import axios from 'axios';
import { Imdb } from '../presentation/';

class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url : '',
      err: '',
      imdb: [],
      youtubeCode: ''
    };
  }

  urlChange(e) {
    this.setState({
      url: e.target.value
    });
  }

  handleQuery(e) {
    e.preventDefault();
    axios.post('/api/movie', {
      url: this.state.url
    })
    .then((info) => {
      this.setState({
        imdb: info.data
      });
    })
    .then(() => {
      axios.post('/api/trailer', {
        movieId: this.state.imdb.id
      })
    })
    .then((source) => {
      console.log(source);
      this.setState({
        youtubeCode: source.data
      });
    })
    .catch((err) => {
        this.setState({
          err
        });
    });
  }

  render() {
    return (
      <div className="container url-query">
        <nav className='navbar navbar-default'>
    			<div className='container-fluid'>
    				<div className='navbar-header'>
    					<a className='navbar-brand'>Search something!</a>
    				</div>
    			</div>
    		</nav>
        <form className="query-form" onSubmit={(e)=>this.handleQuery(e)} >
          <input className="input query-input" id="url" name="url" type="text" placeholder="URL" required
            onChange={(e)=>this.urlChange(e)} />
            <button className="btn btn-default" type="submit">Search</button>
        </form>
        <Imdb rating={this.state.imdb.rating} votes={this.state.imdb.votes}
          url={this.state.imdb.url}/>
      </div>
    )
  }
}

export default Landingpage;
