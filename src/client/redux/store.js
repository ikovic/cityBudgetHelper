import {createStore, combineReducers} from 'redux';
import rootReducer from './reducers/index';

export default createStore(rootReducer);