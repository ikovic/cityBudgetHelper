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
}

const actions = new Actions();
export default actions;