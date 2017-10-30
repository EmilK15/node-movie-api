import React, { Component } from 'react';

class Error extends Component {

	render() {
		return (
				this.props.error ?
					<div className = "errorMsg alert alert-danger fade in">
						{this.props.error}
					</div>
				: null
			)
	}
}

export default Error;
