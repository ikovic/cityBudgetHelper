import constants from './constants';

class Actions {

    logIn(user, token) {
        return {
            type: constants.LOG_IN,
            data: {
                user,
                token
            }
        }
    }

    logOut() {
        return {
            type: constants.LOG_OUT,
            data: null
        }
    }
}

const actions = new Actions();
export default actions;
