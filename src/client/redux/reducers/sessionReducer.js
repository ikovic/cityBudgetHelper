import constants from '../constants';

function sessionReducer(state = {}, action) {
    switch (action.type) {
        case constants.LOG_IN:
            return Object.assign({}, state, {
                loggedIn: true
            });
        case constants.LOG_OUT:
            return Object.assign({}, state, {
                loggedIn: false
            });

        default:
            return state;
    }
}

export default sessionReducer;
