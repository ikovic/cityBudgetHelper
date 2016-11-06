import constants from '../constants';

function organizationReducer(state = {}, action) {
    switch (action.type) {
        case constants.LOAD_ORGANIZATION:
            return Object.assign({}, state, {
                organization: action.data.organization
            });

        default:
            return state;
    }
}

export default organizationReducer;
