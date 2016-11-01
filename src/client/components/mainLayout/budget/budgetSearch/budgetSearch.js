import React, {Component, PropTypes} from 'react';
import {Card, CardText, CardTitle, Textfield} from 'react-mdl';

export default class BudgetSearch extends Component {

    render() {
        return (
            <div id="budgetSearchWrapper">
                <Card shadow={0} style={{width: '100%', margin: 'auto', minHeight: '50px'}}>
                    <CardTitle>Pretraga</CardTitle>
                    <CardText>
                        <Textfield
                            onChange={() => {}}
                            id="searchBudgetItems"
                            label="Pozicija"
                            floatingLabel
                            style={{width: '100%'}}
                        />
                    </CardText>
                </Card>
            </div>
        );
    }

}