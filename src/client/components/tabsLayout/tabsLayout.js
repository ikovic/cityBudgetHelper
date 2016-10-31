import React from 'react';
import {Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from 'react-mdl';
import Budget from './budget/budget';

export default class TabsLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {activeTab: 0};
    }

    handleTabChange(tabId) {
        switch (tabId) {
            case 0:
                return tabId;
            case 1:
                return <Budget/>;
            case 2:
                return tabId;
            case 3:
                return tabId;
        }
    }

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header>
                        <HeaderRow title="Distribucija troškova po stavci proračuna"/>
                        <HeaderTabs ripple activeTab={this.state.activeTab}
                                    onChange={(tabId) => this.setState({activeTab: tabId})}>
                            <Tab>Narudžbenice</Tab>
                            <Tab>Proračun</Tab>
                            <Tab>Dobavljači</Tab>
                            <Tab>Troškovi</Tab>
                        </HeaderTabs>
                    </Header>
                    <Drawer title="Postavke">
                        <ul>
                            <li>Korisnici</li>
                            <li>Organizacija</li>
                        </ul>
                    </Drawer>
                    <Content>
                        <div className="page-content">{this.handleTabChange(this.state.activeTab)}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}