import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Header, HeaderRow, HeaderTabs, Tab} from 'react-mdl';

class TabsHeader extends Component {
    render() {
        return (
            <Header >
                <HeaderRow title="Distribucija troškova po stavci proračuna">
                    {this.props.user.firstName + " " + this.props.user.lastName}
                </HeaderRow>
                <HeaderTabs ripple activeTab={this.props.activeTab}
                            onChange={(tabId) => this.props.changeTab(tabId)}>
                    <Tab>Narudžbenice</Tab>
                    <Tab>Proračun</Tab>
                    <Tab>Dobavljači</Tab>
                    <Tab>Troškovi</Tab>
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