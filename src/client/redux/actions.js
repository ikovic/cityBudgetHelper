import constants from './constants';

class Actions {

    logIn(email, password) {
        return {
            type: constants.LOG_IN,
            data: {
                email,
                password
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