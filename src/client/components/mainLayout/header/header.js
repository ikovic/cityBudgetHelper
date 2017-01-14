import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Header, HeaderRow, HeaderTabs, Tab} from 'react-mdl';
import i18n from '../../../util/i18n';
import keys from '../../../translations/keys';

class TabsHeader extends Component {
  render() {
    return (
      <Header >
        <HeaderRow title={i18n.getTranslation(keys.TABS_HEADER.TITLE)}>
          {this.props.user.firstName + " " + this.props.user.lastName}
        </HeaderRow>
        <HeaderTabs ripple activeTab={this.props.activeTab}
                    onChange={(tabId) => this.props.changeTab(tabId)}>
          <Tab>{i18n.getTranslation(keys.TABS_HEADER.ORDERS)}</Tab>
          <Tab>{i18n.getTranslation(keys.TABS_HEADER.BUDGET)}</Tab>
          <Tab>{i18n.getTranslation(keys.TABS_HEADER.SUPPLIERS)}</Tab>
          <Tab>{i18n.getTranslation(keys.TABS_HEADER.COSTS)}</Tab>
        </HeaderTabs>
      </Header>
    );
  }
}

TabsHeader.propTypes = {
  activeTab: PropTypes.number.isRequired,
  changeTab: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.session.user
  };
}

export default connect(mapStateToProps)(TabsHeader);
