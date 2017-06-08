import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';

import createSagaMiddleware from 'redux-saga';

import { fromJS } from 'immutable';

import createReducer from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(initialState = {}, history) {
    const reactRouterMiddleware = routerMiddleware(history);

    const store = createStore(
                createReducer(),
                fromJS(initialState),
                composeEnhancers(
                    applyMiddleware(reactRouterMiddleware, sagaMiddleware)
                    )
            )
    
    store.runSaga = sagaMiddleware.run;
    store.asyncReducers = {}; // Async reducer registry

    if (module.hot) {
        module.hot.accept('./reducers', () => {
        import('./reducers').then((reducerModule) => {
                const createReducers = reducerModule.default;
                const nextReducers = createReducers(store.asyncReducers);

                store.replaceReducer(nextReducers);
            });
        });
    }

    return store;
}