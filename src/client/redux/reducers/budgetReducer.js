import constants from '../constants';

function budgetReducer(state = null, action) {
    switch (action.type) {
        case constants.LOAD_BUDGET:
            return Object.assign({}, state, {
                budget: action.data.budget
            });

        default:
            return state;
    }
}

export default budgetReducer;
