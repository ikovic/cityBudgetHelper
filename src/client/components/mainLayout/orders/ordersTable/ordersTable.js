import React, {PropTypes} from 'react';
import {DataTable, TableHeader, IconButton} from 'react-mdl';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';
import moment from 'moment';

const OrdersTable = ({items, editItem, deleteItem}) => {

  function rowActions(row) {
    return (
      <span>
        <IconButton name="mode_edit" onClick={() => editItem(row)}/>
        <IconButton name="delete" onClick={() => deleteItem(row)}/>
      </span>
    )
  }

  function budgetItemFormat(row) {
    return <span>{row.BudgetItem.position}</span>
  }

  function totalAmountFormat(row) {
    return <span>{row.orderItems.reduce((sum, item) => sum + item.total, 0)}</span>
  }

  function formatDate(row) {
    return <span>{moment(row.dateReceived).format('DD/MM/YYYY')}</span>
  }

  return (
    <DataTable id="ordersTable"
               rows={items}
    >
      <TableHeader name="identificator">{i18n.getTranslation(keys.ORDER.IDENTIFICATOR)}</TableHeader>
      <TableHeader name="dateReceived"
                   cellFormatter={(cell, row, idx) => formatDate(row)}>
        {i18n.getTranslation(keys.ORDER.DATE_RECEIVED)}
      </TableHeader>
      <TableHeader numeric name="type">{i18n.getTranslation(keys.ORDER.TYPE)}</TableHeader>
      <TableHeader numeric name="budgetItem"
                   cellFormatter={(cell, row, idx) => budgetItemFormat(row)}>
        {i18n.getTranslation(keys.ORDER.BUDGET_ITEM_POSITION)}
      </TableHeader>
      <TableHeader numeric name="amount"
                   cellFormatter={(cell, row, idx) => totalAmountFormat(row)}>
        {i18n.getTranslation(keys.ORDER.TOTAL_AMOUNT)}
      </TableHeader>
      <TableHeader numeric name="delete"
                   cellFormatter={(cell, row, idx) => rowActions(row)}>
        {i18n.getTranslation(keys.BUDGET_TABLE.ACTIONS)}
      </TableHeader>
    </DataTable>
  );

};

OrdersTable.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
};

export default OrdersTable;
