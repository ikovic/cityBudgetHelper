import {combineReducers} from 'redux';
import sessionReducer from './sessionReducer';
import organizationReducer from './organizationReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    organization: organizationReducer
});

export default rootReducer;
