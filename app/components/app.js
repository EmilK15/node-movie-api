import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Landingpage } from './containers';
import ReactDOM from 'react-dom';

ReactDOM.render((
  <Router>
    <Landingpage />
  </Router>),
  document.getElementById('root'));
