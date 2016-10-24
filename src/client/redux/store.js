import {createStore, combineReducers} from 'redux';
import sessionReducers from './reducers/sessionReducers';

export default createStore(combineReducers(sessionReducers));