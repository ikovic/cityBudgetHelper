import React, {Component, PropTypes} from 'react';
import {Header, HeaderRow, HeaderTabs, Tab} from 'react-mdl';

export default class TabsHeader extends Component {

    render() {
        return (
            <Header >
                <HeaderRow title="Distribucija troškova po stavci proračuna" />
                <HeaderTabs ripple activeTab={this.props.activeTab}
                            onChange={(tabId) => this.props.changeTab(tabId)} >
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
    changeTab: PropTypes.func.isRequired
};