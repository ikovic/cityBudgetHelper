import constants from '../constants';

function ordersReducer(state = [], action) {
  switch (action.type) {
    case constants.LOAD_ORDERS:
      return action.data.orders.slice();

    default:
      return state;
  }
}

export default ordersReducer;
