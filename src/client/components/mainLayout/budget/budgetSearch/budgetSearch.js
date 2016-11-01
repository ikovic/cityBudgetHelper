import React, {Component, PropTypes} from 'react';
import {Card, CardActions, Textfield} from 'react-mdl';

export default class BudgetSearch extends Component {

    render() {
        return (
            <div id="budgetSearchWrapper">
                <Card shadow={0} style={{width: '512px', margin: 'auto', minHeight: '50px'}}>
                    <CardActions border>
                        <Textfield
                            onChange={() => {
                            }}
                            id="searchBudgetItems"
                            label="Pretraga po poziciji"
                            floatingLabel
                            style={{width: '100%'}}
                        />
                    </CardActions>
                </Card>
            </div>
        );
    }

}