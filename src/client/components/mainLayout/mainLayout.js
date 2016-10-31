import React from 'react';
import {Layout, Content} from 'react-mdl';
import Sidebar from './sidebar/sidebar';
import Header from './header/header';
import Budget from './budget/budget';
import Orders from './orders/orders';

export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.handleTabChange = this.handleTabChange.bind(this);

        this.state = {activeTab: 0};
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

    render() {
        return (
            <div id="tabsLayout" >
                <Layout fixedHeader >
                    <Header activeTab={this.state.activeTab} changeTab={this.handleTabChange} />
                    <Sidebar />
                    <Content id="appContent" >
                        <div className="page-content" >{this.getDisplayElement(this.state.activeTab)}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}