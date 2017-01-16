import {combineReducers} from 'redux';
import sessionReducer from './sessionReducer';
import organizationReducer from './organizationReducer';
import budgetReducer from './budgetReducer';
import budgetItemsReducer from './budgetItemsReducer';
import translationReducer from './translationReducer';

const rootReducer = combineReducers({
  session: sessionReducer,
  organization: organizationReducer,
  budget: budgetReducer,
  budgetItems: budgetItemsReducer,
  translation: translationReducer
});

export default rootReducer;
