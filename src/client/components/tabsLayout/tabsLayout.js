import React from 'react';
import {Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content} from 'react-mdl';

export default class TabsLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
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
                        <div className="page-content">Content for the tab: {this.state.activeTab}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}