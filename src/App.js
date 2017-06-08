import React from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import HomePage from './containers/Home';

export default function App (history) {
  return (
    <div>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={HomePage} />
      </ConnectedRouter>
    </div>
  )
};
