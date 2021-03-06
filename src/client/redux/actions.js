import constants from './constants';
import i18n from '../util/i18n';

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

  addBudgetItem(budgetItem) {
    return {
      type: constants.ADD_BUDGET_ITEM,
      data: {
        budgetItem
      }
    }
  }

  updateBudgetItem(budgetItem) {
    return {
      type: constants.UPDATE_BUDGET_ITEM,
      data: {
        budgetItem
      }
    }
  }

  removeBudgetItem(budgetItem) {
    return {
      type: constants.REMOVE_BUDGET_ITEM,
      data: {
        budgetItem
      }
    }
  }

  changeLanguage(language) {
    return dispatch => {
      i18n.changeLanguage(language, () => {
        dispatch(this.updateTranslations(language));
      });
    }
  }

  updateTranslations(language) {
    return {
      type: constants.SET_LANGUAGE,
      data: {
        language
      }
    }
  }

}

const actions = new Actions();
export default actions;
