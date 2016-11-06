import React, {Component, PropTypes} from 'react';
import {Grid, Cell, FABButton, Icon} from 'react-mdl';
import {get} from '../../../util/fetch';
import BudgetTable from './budgetTable/budgetTable';
import BudgetSearch from './budgetSearch/budgetSearch';
import BudgetItem from './budgetItem/budgetItem';

export default class Budget extends Component {

    constructor() {
        super();
        
        this.state = {
            budget: {
                items: [
                    {position: 'Acrylic (Transparent)', description: 'Boja za cestu', amount: 2.90},
                    {position: 'Plywood (Birch)', description: 'Drvo za potpalu', amount: 1.25},
                    {position: 'Laminate (Gold on Blue)', description: 'Laminat', amount: 2.35}
                ]
            }
        }
    }

    setTableHeight() {
        var height = window.innerHeight;
        var tableHeight = height - 150;
        document.getElementById('tableWrapper').setAttribute("style", `height:${tableHeight}px`);
    }

    componentDidMount() {
        this.setTableHeight();
        window.addEventListener('resize', this.setTableHeight);
        get('http://localhost:3000/api/budgets', (error, meta, body) => {
            if (!error && meta.status == 200) {
                var resObj = JSON.parse(body.toString());

            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setTableHeight);
    }

    render() {
        return (
            <section id="budgetSection">
                <Grid >
                    <Cell id="tableWrapper" col={8}>
                        <BudgetTable budget={this.state.budget}/>
                    </Cell>
                    <Cell id="budgetTools" col={4}>
                        <BudgetSearch/>
                        <BudgetItem/>
                        <div className="actionWrapper">
                            <FABButton colored ripple>
                                <Icon name="add"/>
                            </FABButton>
                        </div>
                    </Cell>
                </Grid>
            </section>
        );
    }
}