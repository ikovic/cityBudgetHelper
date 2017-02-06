import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import i18n from '../../../util/i18n';
import keys from '../../../translations/keys';
import {Grid, Cell, Card, CardTitle, CardText, FABButton, Icon} from 'react-mdl';
import actions from '../../../redux/actions';
import OrdersTable from './ordersTable/ordersTable';

class Orders extends Component {

  loadOrders() {
    // only the default budget is present in the store
    const {organization, budget, loadOrders} = this.props;
    loadOrders(organization.id, budget.id);
  }

  setTableHeight() {
    let height = window.innerHeight;
    let tableHeight = height - 250;
    document.getElementById('tableContainer').setAttribute("style", `height:${tableHeight}px`);
  }

  componentDidMount() {
    this.setTableHeight();
    window.addEventListener('resize', this.setTableHeight);
    if (this.props.organization.id && this.props.budget.id) {
      this.loadOrders();
    }
  }

  render() {
    return (
      <section id="ordersSection">
        <Grid >
          <Cell col={8}>
            <Card id="tableCard" shadow={0}>
              <CardTitle className="tableCardTitle">
                <h2 className="mdl-card__title-text">
                  {this.props.budget.title || i18n.getTranslation(keys.ORDER.DEFAULT_TITLE)}
                </h2>
                <FABButton id="addBudgetItemBtn" colored ripple
                           onClick={() => console.log('clicked new')}>
                  <Icon name="add"/>
                </FABButton>
              </CardTitle>
              <CardText id="tableContainer">
                {this.props.orders ?
                  <OrdersTable items={this.props.orders}/>
                  :
                  <h3>{i18n.getTranslation(keys.ORDER.DEFAULT_TITLE)}</h3>
                }
              </CardText>
            </Card>
          </Cell>
          <Cell id="budgetTools" col={4}>

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
    orders: state.orders
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadOrders: (orgId, budgetId) => dispatch(actions.loadOrders(orgId, budgetId))
  }
}

Orders.propTypes = {
  budget: PropTypes.object.isRequired,
  organization: PropTypes.object.isRequired,
  orders: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(Orders);
