import { combineReducers } from 'redux-immutable';
import { routerReducer } from 'react-router-redux';

export default function createReducer(asyncReducers) {
    return combineReducers({
        router: routerReducer,
        ...asyncReducers,
    });
}