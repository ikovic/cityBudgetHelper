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

    loadOrganization(organization) {
        return {
            type: constants.LOAD_ORGANIZATION,
            data: {
                organization
            }
        }
    }

    loadBudget(budget) {
        return {
            type: constants.LOAD_BUDGET,
            data: {
                budget
            }
        }
    }

    loadBudgetItems(budgetItems) {
        return {
            type: constants.LOAD_BUDGET_ITEMS,
            data: {
                budgetItems
            }
        }
    }
}

const actions = new Actions();
export default actions;
