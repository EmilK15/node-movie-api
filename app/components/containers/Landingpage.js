import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Query, Movie } from './';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component = {Query} />
      <Route path="/:url" component = {Movie} />
    </Switch>
  )
}
