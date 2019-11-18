import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Dashboard from '../pages/Dashboard';
import CreateOrUpdate from '../pages/CreateOrUpdate';
import Details from '../pages/Details';
import Profile from '../pages/Profile';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/register" component={SignUp} />

      <Route path="/profile" component={Profile} isPrivate />
      <Route path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/create" component={CreateOrUpdate} isPrivate />
      <Route path="/update-meetup/:id" component={CreateOrUpdate} isPrivate />
      <Route path="/details/:id" component={Details} isPrivate />
    </Switch>
  );
}
