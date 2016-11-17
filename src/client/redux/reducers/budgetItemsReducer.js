import constants from '../constants';

function budgetItemReducer(state = {}, action) {
    switch (action.type) {
        case constants.UPDATE_BUDGET_ITEM:
            if (state.id !== action.data.budgetItem.id) {
                return state;
            } else {
                return Object.assign({}, state, action.data.budgetItem);
            }

        default:
            return state;
    }
}

function budgetItemsReducer(state = [], action) {
    switch (action.type) {
        case constants.LOAD_BUDGET_ITEMS:
            return action.data.budgetItems.slice();

        case constants.ADD_BUDGET_ITEM:
            return [...state, action.data.budgetItem];

        case constants.REMOVE_BUDGET_ITEM:
            return state.filter((item) => item.id !== action.data.budgetItem.id);

        case constants.UPDATE_BUDGET_ITEM:
            return state.map(item => budgetItemReducer(item, action));

        default:
            return state;
    }
}

export default budgetItemsReducer;
