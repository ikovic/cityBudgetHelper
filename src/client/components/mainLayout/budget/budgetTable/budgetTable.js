import React, {Component, PropTypes} from 'react';
import {DataTable, TableHeader} from 'react-mdl';

export default class BudgetTable extends Component {
    render() {
        return (
            <DataTable id="budgetTable"
                       shadow={0}
                       rows={this.props.budget.items}
            >
                <TableHeader name="position">Pozicija</TableHeader>
                <TableHeader name="description">Opis</TableHeader>
                <TableHeader numeric name="amount">Iznos</TableHeader>
            </DataTable>
        );
    }
}

BudgetTable.propTypes = {
    budget: PropTypes.object.isRequired
};