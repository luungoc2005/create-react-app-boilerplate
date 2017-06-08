import { fromJS } from 'immutable';
import { combineReducers } from 'redux-immutable';
import { LOCATION_CHANGE, routerReducer } from 'react-router-redux';

export default function createReducer(asyncReducers) {
    return combineReducers({
        router: routerReducer,
        ...asyncReducers,
    });
}