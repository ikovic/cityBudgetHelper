import {createStore, combineReducers} from 'redux';
import sessionReducer from './reducers/sessionReducers';

export default createStore(combineReducers(sessionReducer));