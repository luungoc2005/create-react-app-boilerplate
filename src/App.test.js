import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import createHistory from 'history/createBrowserHistory';
import configureStore from './store'

describe('page rendering', () => {
  let history;
  let initialState;
  let store;

  beforeAll(() => {
    initialState = {};
    history = createHistory();
    store = configureStore(initialState, history);
  });

  describe('landing page', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(App({store, history}), div);
    });
  });
});