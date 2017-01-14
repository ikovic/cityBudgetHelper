import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Layout, Content} from 'react-mdl';
import {get} from '../../util/fetch';
import actions from '../../redux/actions';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Budget from './budget/budget';
import Orders from './orders/orders';
import BudgetDialog from '../dialog/budgetDialog';
import dialogPolyfill from 'dialog-polyfill';

class MainLayout extends Component {

  constructor(props) {
    super(props);

    this.handleTabChange = this.handleTabChange.bind(this);

    this.state = {activeTab: 1};
  }

  getDisplayElement(tabId) {
    switch (tabId) {
      case 0:
        return <Orders/>;
      case 1:
        return <Budget/>;
      case 2:
        return tabId;
      case 3:
        return tabId;
    }
  }

  handleTabChange(tabId) {
    this.setState({
      activeTab: tabId
    });
  }

  // TODO http://stackoverflow.com/questions/35623656/how-can-i-display-a-modal-dialog-in-redux-that-performs-asynchronous-actions/35641680#35641680
  // <BudgetDialog/>
  componentDidMount() {
    // for the dialog example, we have to register the dialogs window
    const dialogs = document.querySelector("dialog");
    dialogs && dialogPolyfill.registerDialog(dialogs);

    get('http://localhost:3000/api/organizations/' + this.props.user.orgId,
      null,
      (error, meta, body) => {
        if (!error && meta.status == 200) {
          let org = JSON.parse(body.toString());
          this.props.dispatch(actions.loadOrganization(org));
        }
      });
  }

  render() {
    return (
      <div id="tabsLayout">
        <Layout fixedHeader>
          <Header activeTab={this.state.activeTab} changeTab={this.handleTabChange}/>
          <Sidebar />
          <Content id="appContent">
            <div className="page-content">{this.getDisplayElement(this.state.activeTab)}</div>
          </Content>
        </Layout>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.session.user
  };
}

MainLayout.propTypes = {
  user: PropTypes.object.isRequired
};

export default connect(mapStateToProps)(MainLayout);
