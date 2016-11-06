import {combineReducers} from 'redux';
import sessionReducer from './sessionReducer';
import organizationReducer from './organizationReducer';
import budgetReducer from './budgetReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    organization: organizationReducer,
    budget: budgetReducer
});

export default rootReducer;
