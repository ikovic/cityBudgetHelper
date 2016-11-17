import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Grid, Cell, Card, CardTitle, CardText, FABButton, Icon} from 'react-mdl';
import {get, put, post} from '../../../util/fetch';
import actions from '../../../redux/actions';
import BudgetTable from './budgetTable/budgetTable';
import BudgetSearch from './budgetSearch/budgetSearch';
import BudgetItem from './budgetItem/budgetItem';

class Budget extends Component {

    constructor() {
        super();

        this.deleteBudgetItem = this.deleteBudgetItem.bind(this);
        this.editBudgetItem = this.editBudgetItem.bind(this);
        this.cancelEditBudgetItem = this.cancelEditBudgetItem.bind(this);
        this.saveBudgetItem = this.saveBudgetItem.bind(this);

        this.state = {
            editBudgetItem: {
                item: null,
                edit: false,
                create: false
            }
        };
    }

    loadBudgetItems(orgId) {
        get(`http://localhost:3000/api/organizations/${orgId}/budgets`,
            {
                default: true,
                orgId: orgId
            },
            (error, meta, body) => {
                if (!error && meta.status == 200) {
                    let budgets = JSON.parse(body.toString());
                    if (budgets && budgets.length) {
                        this.props.dispatch(actions.loadBudget(budgets[0]));
                        get(`http://localhost:3000/api/organizations/${orgId}/budgets/${budgets[0].id}/budgetItems`,
                            null,
                            (error, meta, body) => {
                                if (!error && meta.status == 200) {
                                    let budgetItems = JSON.parse(body.toString());
                                    if (budgetItems && budgetItems.length) {
                                        this.props.dispatch(actions.loadBudgetItems(budgetItems));
                                    }
                                }
                            });
                    }
                }
            });
    }

    deleteBudgetItem(item) {
        console.log('delete', item);
    }

    editBudgetItem(item) {
        this.setState({
            editBudgetItem: {
                item: item,
                edit: true,
                create: false
            }
        });
    }

    createBudgetItem() {
        this.setState({
            editBudgetItem: {
                item: null,
                edit: false,
                create: true
            }
        });
    }

    cancelEditBudgetItem() {
        this.setState({
            editBudgetItem: {
                item: null,
                edit: false,
                create: false
            }
        });
    }

    saveBudgetItem(item) {
        const orgId = this.props.organization.id;
        const budgetId = this.props.budget.id;
        const fetch = item.id ? post : put;
        const urlId = item.id ? `/${item.id}` : '';
        const action = item.id ? actions.updateBudgetItem : actions.addBudgetItem;

        fetch(`http://localhost:3000/api/organizations/${orgId}/budgets/${budgetId}/budgetItems${urlId}`,
            item,
            (err, meta, body) => {
                if (!err && meta.status == 200) {
                    let budgetItem = JSON.parse(body);
                    this.props.dispatch(action(budgetItem));
                }
            }
        );
        this.cancelEditBudgetItem();
    }

    setTableHeight() {
        let height = window.innerHeight;
        let tableHeight = height - 250;
        document.getElementById('tableContainer').setAttribute("style", `height:${tableHeight}px`);
    }

    componentDidMount() {
        this.setTableHeight();
        window.addEventListener('resize', this.setTableHeight);
        if (this.props.organization.id) {
            this.loadBudgetItems(this.props.organization.id);
        }
    }

    componentWillReceiveProps(nextProps) {
        const orgId = nextProps.organization.id;
        if (orgId != this.props.organization.id) {
            this.loadBudgetItems(orgId);
        }
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.setTableHeight);
    }

    render() {
        return (
            <section id="budgetSection" >
                <Grid >
                    <Cell col={8} >
                        <Card id="tableCard" shadow={0} >
                            <CardTitle className="tableCardTitle" >
                                <span>{this.props.budget.title || 'Proračun'}</span>
                                <FABButton id="addBudgetItemBtn" colored ripple onClick={() => this.createBudgetItem()} >
                                    <Icon name="add" />
                                </FABButton>
                            </CardTitle>
                            <CardText id="tableContainer" >
                                {this.props.budgetItems ?
                                    <BudgetTable items={this.props.budgetItems}
                                                 deleteItem={this.deleteBudgetItem}
                                                 editItem={this.editBudgetItem}
                                    />
                                    :
                                    <h3>Polazni proračun nije postavljen</h3>
                                }
                            </CardText>
                        </Card>
                    </Cell>
                    <Cell id="budgetTools" col={4} >
                        <BudgetSearch/>
                        <BudgetItem item={this.state.editBudgetItem.item}
                                    options={{edit: this.state.editBudgetItem.edit, create: this.state.editBudgetItem.create}}
                                    saveItem={this.saveBudgetItem}
                                    cancelEdit={this.cancelEditBudgetItem}
                        />
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
