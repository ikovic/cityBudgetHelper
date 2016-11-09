import constants from '../constants';

function budgetItemsReducer(state = [], action) {
    switch (action.type) {
        case constants.LOAD_BUDGET_ITEMS:
            return action.data.budgetItems.slice();

        default:
            return state;
    }
}

export default budgetItemsReducer;
