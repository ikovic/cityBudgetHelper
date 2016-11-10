import constants from '../constants';

function logIn(state, data) {
    var newState = Object.assign({}, state, {
        loggedIn: true,
        user: data.user,
        token: data.token
    });

    sessionStorage.setItem('budget-session', JSON.stringify(newState));

    return newState;
}

function logOut(state) {
    sessionStorage.removeItem('budget-session');
    return Object.assign({}, state, {
        loggedIn: false,
        user: null,
        token: null
    });
}


function sessionReducer(state = {}, action) {
    switch (action.type) {
        case constants.LOG_IN:
            return logIn(state, action.data);

        case constants.LOG_OUT:
            return logOut(state);

        default:
            return state;
    }
}

export default sessionReducer;
