import React, {Component, PropTypes} from 'react';
import {DataTable, TableHeader, IconButton} from 'react-mdl';

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
                <TableHeader name="position">Pozicija</TableHeader>
                <TableHeader name="description">Opis</TableHeader>
                <TableHeader numeric name="amount">Iznos</TableHeader>
                <TableHeader numeric name="delete"
                             cellFormatter={(cell, row, idx) => this.rowActions(row)}>
                    Akcije
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