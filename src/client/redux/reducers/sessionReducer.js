import constants from '../constants';

function sessionReducer(state = {}, action) {
    switch (action.type) {
        case constants.LOG_IN:
            return Object.assign({}, state, {
                loggedIn: true,
                user: action.data.user,
                token: action.data.token
            });
        case constants.LOG_OUT:
            return Object.assign({}, state, {
                loggedIn: false,
                user: null,
                token: null
            });

        default:
            return state;
    }
}

export default sessionReducer;
