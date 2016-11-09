import {combineReducers} from 'redux';
import sessionReducer from './sessionReducer';
import organizationReducer from './organizationReducer';
import budgetReducer from './budgetReducer';
import budgetItemsReducer from './budgetItemsReducer';

const rootReducer = combineReducers({
    session: sessionReducer,
    organization: organizationReducer,
    budget: budgetReducer,
    budgetItems: budgetItemsReducer
});

export default rootReducer;
