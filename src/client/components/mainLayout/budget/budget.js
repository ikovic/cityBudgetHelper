import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell, Card, CardTitle, CardText, FABButton, Icon} from 'react-mdl';
import {get} from '../../../util/fetch';
import actions from '../../../redux/actions';
import BudgetTable from './budgetTable/budgetTable';
import BudgetSearch from './budgetSearch/budgetSearch';
import BudgetItem from './budgetItem/budgetItem';

class Budget extends Component {

    setTableHeight() {
        var height = window.innerHeight;
        var tableHeight = height - 250;
        document.getElementById('tableContainer').setAttribute("style", `height:${tableHeight}px`);
    }

    componentDidMount() {
        this.setTableHeight();
        window.addEventListener('resize', this.setTableHeight);
        get('http://localhost:3000/api/budgets', {
            default: true,
            orgId: this.props.organization.id
        }, (error, meta, body) => {
            if (!error && meta.status == 200) {
                let budgets = JSON.parse(body.toString());
                if (budgets && budgets.length) {
                    this.props.dispatch(actions.loadBudget(budgets[0]));
                    get(`http://localhost:3000/api/budgets/${budgets[0].id}/budgetItems`, null, (error, meta, body) => {
                        if (!error && meta.status == 200) {
                            let budgetItems = JSON.parse(body.toString());
                            if (budgetItems && budgetItems.length) {
                                console.dir(budgetItems);
                                this.props.dispatch(actions.loadBudgetItems(budgetItems));
                            }
                        }
                    });
                }
            }
        });
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setTableHeight);
    }

    render() {
        return (
            <section id="budgetSection" >
                <Grid >
                    <Cell col={8} >
                        <Card shadow={0} style={{width: '100%', margin: 'auto'}} >
                            <CardTitle>{this.props.budget.title || 'Proračun'}</CardTitle>
                            <CardText id="tableContainer">
                                {this.props.budgetItems ?
                                    <BudgetTable items={this.props.budgetItems} />
                                    :
                                    <h3>Polazni proračun nije postavljen</h3>
                                }
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell id="budgetTools" col={4} >
                        <BudgetSearch/>
                        <BudgetItem/>
                        <div className="actionWrapper" >
                            <FABButton colored ripple >
                                <Icon name="add" />
                            </FABButton>
                        </div>
                    </Cell>
                </Grid>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {
        budget: state.budget,
        organization: state.organization,
        budgetItems: state.budgetItems
    };
}

Budget.propTypes = {
    budget: PropTypes.object.isRequired,
    organization: PropTypes.object.isRequired,
    budgetItems: PropTypes.array
};

export default connect(mapStateToProps)(Budget);
