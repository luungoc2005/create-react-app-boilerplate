import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

import { fromJS } from 'immutable';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {
    const reactRouterMiddleware = routerMiddleware(history);

    return createStore(
                combineReducers({
                    router: routerReducer,
                }),
                fromJS(initialState),
                composeEnhancers(
                    applyMiddleware(reactRouterMiddleware, sagaMiddleware)
                    )
                )
}