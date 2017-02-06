import {get, put, post} from '../util/fetch';

function getOrders(orgId, budgetId) {
  get(`http://localhost:3000/api/organizations/${orgId}/budgets/${budgetId}/orders`,
    null,
    (error, meta, body) => {
      if (!error && meta.status == 200) {
        let orders = JSON.parse(body.toString());
        if (orders && orders.length) {
          console.dir(orders);
        }
      }
    });
}

export {
  getOrders
}
