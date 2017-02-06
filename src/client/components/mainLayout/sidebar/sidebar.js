import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {Drawer, List, ListItem, ListItemContent} from 'react-mdl';
import actions from '../../../redux/actions';
import i18n from '../../../util/i18n';
import keys from '../../../translations/keys';

class Sidebar extends Component {

  render() {
    return (
      <Drawer title={i18n.getTranslation(keys.SETTINGS.TITLE)}>
        <List>
          <ListItem>
            <ListItemContent icon="person">{i18n.getTranslation(keys.SETTINGS.PROFILE)}</ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent icon="people">{i18n.getTranslation(keys.SETTINGS.ORGANIZATION)}</ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent icon="account_balance">{i18n.getTranslation(keys.SETTINGS.BUDGETS)}</ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent icon="translate"
                             onClick={() => this.props.changeLanguage(this.props.language === 'hr' ? 'en' : 'hr')}>
              {i18n.getTranslation(keys.SETTINGS.LANGUAGE)}
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemContent icon="power_settings_new"
                             onClick={() => this.props.logOut()}>
              {i18n.getTranslation(keys.SETTINGS.LOGOUT)}
            </ListItemContent>
          </ListItem>
        </List>
      </Drawer>
    );
  }

}

Sidebar.PropTypes = {
  logOut: PropTypes.func.isRequired,
  changeLanguage: PropTypes.func.isRequired
};


function mapDispatchToProps(dispatch) {
  return ({
    logOut: () => dispatch(actions.logOut()),
    changeLanguage: lng => dispatch(actions.changeLanguage(lng))
  });
}

export default connect(null, mapDispatchToProps)(Sidebar);
