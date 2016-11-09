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
        this.setTableHeight();
        window.addEventListener('resize', this.setTableHeight);
        get('http://localhost:3000/api/budgets', (error, meta, body) => {
            if (!error && meta.status == 200) {
                var resObj = JSON.parse(body.toString());
                if (resObj && resObj.length) {
                    this.props.dispatch(actions.loadBudget(resObj));
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
                            <CardTitle>Proračun</CardTitle>
                            <CardText>
                                {this.props.budget ?
                                    <BudgetTable budget={this.props.budget} />
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
        budget: state.budget
    };
}

export default connect(mapStateToProps)(Budget);
