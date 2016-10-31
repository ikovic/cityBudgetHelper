import React, {Component} from 'react';
import {Drawer, List, ListItem, ListItemContent} from 'react-mdl';

export default class Sidebar extends Component {

    render() {
        return (
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
        );
    }

}