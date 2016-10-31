import React from 'react';
import {Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content, List, ListItem, ListItemContent} from 'react-mdl';
import Budget from './budget/budget';
import Orders from './orders/orders';

export default class MainLayout extends React.Component {

    constructor(props) {
        super(props);

        this.state = {activeTab: 0};
    }

    handleTabChange(tabId) {
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

    render() {
        return (
            <div id="tabsLayout" >
                <Layout fixedHeader >
                    <Header>
                        <HeaderRow title="Distribucija troškova po stavci proračuna" />
                        <HeaderTabs ripple activeTab={this.state.activeTab}
                                    onChange={(tabId) => this.setState({activeTab: tabId})} >
                            <Tab>Narudžbenice</Tab>
                            <Tab>Proračun</Tab>
                            <Tab>Dobavljači</Tab>
                            <Tab>Troškovi</Tab>
                        </HeaderTabs>
                    </Header>
                    <Drawer title="Postavke" >
                        <List>
                            <ListItem>
                                <ListItemContent icon="person" >Profil</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="people" >Organizacija</ListItemContent>
                            </ListItem>
                            <ListItem>
                                <ListItemContent icon="power_settings_new" >Odjava</ListItemContent>
                            </ListItem>
                        </List>
                    </Drawer>
                    <Content id="appContent" >
                        <div className="page-content" >{this.handleTabChange(this.state.activeTab)}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}