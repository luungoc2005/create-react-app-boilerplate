import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import configureStore from './store'

const rootElement = document.getElementById('root');

const initialState = {};
const history = createHistory();
const store = configureStore(initialState, history);

const renderDOM = (appContainer) => {
    ReactDOM.render(
        <Provider store={store}>
            <div>{appContainer}</div>
        </Provider>
        , rootElement
    );
}

renderDOM(App(history));

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderDOM(NextApp(history));
  }); 
}

registerServiceWorker();