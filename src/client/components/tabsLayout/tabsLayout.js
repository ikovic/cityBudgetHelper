import React from 'react';
import { Layout, Header, HeaderRow, HeaderTabs, Tab, Drawer, Content } from 'react-mdl';

export default class TabsLayout extends React.Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 2};
    }

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header>
                        <HeaderRow title="Title"/>
                        <HeaderTabs ripple activeTab={this.state.activeTab}
                                    onChange={(tabId) => this.setState({activeTab: tabId})}>
                            <Tab>Tab1</Tab>
                            <Tab>Tab2</Tab>
                            <Tab>Tab3</Tab>
                            <Tab>Tab4</Tab>
                            <Tab>Tab5</Tab>
                            <Tab>Tab6</Tab>
                        </HeaderTabs>
                    </Header>
                    <Drawer title="Title"/>
                    <Content>
                        <div className="page-content">Content for the tab: {this.state.activeTab}</div>
                    </Content>
                </Layout>
            </div>
        );
    }
}