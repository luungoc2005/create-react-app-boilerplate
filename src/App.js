import React from 'react';

import './App.css';
import 'semantic-ui-css/semantic.min.css';

import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import HomePage from './containers/Home';

// Define your routes here
export default function App ({store, history}) {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Route exact path="/" component={HomePage} />
      </ConnectedRouter>
    </Provider>
  )
};
