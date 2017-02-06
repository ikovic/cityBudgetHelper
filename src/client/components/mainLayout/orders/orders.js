import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import i18n from '../../../util/i18n';
import keys from '../../../translations/keys';
import {Grid, Cell, Card, CardTitle, CardText, FABButton, Icon} from 'react-mdl';
import actions from '../../../redux/actions';

class Orders extends Component {

  loadOrders() {
    // only the default budget is present in the store
    const {organization, budget, loadOrders} = this.props;
    loadOrders(organization.id, budget.id);
  }

  componentDidMount() {
    this.loadOrders();
  }

  render() {
    return (
      <section id="budgetSection">
        <Grid >
          <Cell col={8}>
            <Card id="tableCard" shadow={0}>
              <CardTitle className="tableCardTitle">
                <h2 className="mdl-card__title-text">
                  {this.props.budget.title || i18n.getTranslation(keys.BUDGET.DEFAULT_TITLE)}
                </h2>
                <FABButton id="addBudgetItemBtn" colored ripple
                           onClick={() => console.log('clicked new')}>
                  <Icon name="add"/>
                </FABButton>
              </CardTitle>
              <CardText id="tableContainer">
                <h3>{i18n.getTranslation(keys.BUDGET.DEFAULT_TITLE)}</h3>
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
