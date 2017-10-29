import React, { Component } from 'react';
import axios from 'axios';

class Landingpage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url : '',
      err: ''
    };
  }

  urlChange(e) {
    this.setState({
      url: e
    });
  }

  handleQuery(e) {
    e.preventDefault();

    axios.post('/:' + this.state.url)
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
          <input className="input query-input" type="text" placeholder="URL" required
            onChange={(e)=>this.urlChange(e)} />
            <button className="btn btn-default" type="submit">Search</button>
        </form>
      </div>
    )
  }
}

export default Landingpage;
