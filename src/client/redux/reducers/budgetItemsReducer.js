import constants from '../constants';

function budgetItemsReducer(state = {}, action) {
    switch (action.type) {
        case constants.LOAD_BUDGET_ITEMS:
            return Object.assign({}, state, action.data.budgetItems);

        default:
            return state;
    }
}

export default budgetItemsReducer;
