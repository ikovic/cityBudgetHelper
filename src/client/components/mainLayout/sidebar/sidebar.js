import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Drawer, List, ListItem, ListItemContent} from 'react-mdl';
import actions from '../../../redux/actions';

class Sidebar extends Component {

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
                        <ListItemContent icon="power_settings_new" onClick={() => this.props.logOut()} >
                            Odjava
                        </ListItemContent>
                    </ListItem>
                </List>
            </Drawer>
        );
    }

}

Sidebar.PropTypes = {
    logOut: PropTypes.func.isRequired
};


function mapDispatchToProps(dispatch) {
    return ({
        logOut: () => dispatch(actions.logOut())
    });
}

export default connect(null, mapDispatchToProps)(Sidebar);
