import React, {Component, PropTypes} from 'react';
import {DataTable, TableHeader, IconButton} from 'react-mdl';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class BudgetTable extends Component {

  rowActions(row) {
    return (
      <span>
        <IconButton name="mode_edit" onClick={() => this.props.editItem(row)}/>
        <IconButton name="delete" onClick={() => this.props.deleteItem(row)}/>
      </span>
    )
  }

  render() {
    const {items} = this.props;
    return (
      <DataTable id="budgetTable"
                 rows={items}
      >
        <TableHeader name="position">{i18n.getTranslation(keys.BUDGET_TABLE.POSITION)}</TableHeader>
        <TableHeader name="description">{i18n.getTranslation(keys.BUDGET_TABLE.DESCRIPTION)}</TableHeader>
        <TableHeader numeric name="amount">{i18n.getTranslation(keys.BUDGET_TABLE.AMOUNT)}</TableHeader>
        <TableHeader numeric name="delete"
                     cellFormatter={(cell, row, idx) => this.rowActions(row)}>
          {i18n.getTranslation(keys.BUDGET_TABLE.ACTIONS)}
        </TableHeader>
      </DataTable>
    );
  }
}

BudgetTable.propTypes = {
  items: PropTypes.array.isRequired,
  deleteItem: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired
};
