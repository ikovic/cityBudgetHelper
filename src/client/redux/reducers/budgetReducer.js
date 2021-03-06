import constants from '../constants';

function budgetReducer(state = {}, action) {
    switch (action.type) {
        case constants.LOAD_BUDGET:
            return Object.assign({}, state, action.data.budget);

        default:
            return state;
    }
}

export default budgetReducer;
