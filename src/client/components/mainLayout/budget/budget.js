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
        var tableHeight = height - 150;
        document.getElementById('tableWrapper').setAttribute("style", `height:${tableHeight}px`);
    }

    componentDidMount() {
        console.dir(this.props);
        this.setTableHeight();
        window.addEventListener('resize', this.setTableHeight);
        get('http://localhost:3000/api/budgets', {
            default: true,
            orgId: this.props.organization.id
        }, (error, meta, body) => {
            if (!error && meta.status == 200) {
                var budgets = JSON.parse(body.toString());
                if (budgets && budgets.length) {
                    this.props.dispatch(actions.loadBudget(budgets[0]));
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
                    <Cell id="tableWrapper" col={8} >
                        <Card shadow={0} style={{width: '100%', margin: 'auto', minHeight: '50px'}} >
                            <CardTitle>{this.props.budget.title || 'Proračun'}</CardTitle>
                            <CardText>
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
        organization: state.organization
    };
}

Budget.propTypes = {
    budget: PropTypes.object.isRequired,
    organization: PropTypes.object.isRequired,
    budgetItems: PropTypes.array
};

export default connect(mapStateToProps)(Budget);
