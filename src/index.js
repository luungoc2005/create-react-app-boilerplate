import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import createHistory from 'history/createBrowserHistory';

import { ConnectedRouter, routerReducer, routerMiddleware } from 'react-router-redux';

const rootElement = document.getElementById('root');

const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  combineReducers({
    router: routerReducer
  }),
  composeEnhancers(applyMiddleware(reactRouterMiddleware))
)

const renderDOM = (appContainer) => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <div>{appContainer}</div>
            </ConnectedRouter>
        </Provider>
        , rootElement
    );
}

renderDOM(<App />);
registerServiceWorker();

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    renderDOM(<NextApp />);
  }); 
}