import React, {Component, PropTypes} from 'react';
import {Card, CardText, CardTitle, Textfield} from 'react-mdl';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class OrderSearch extends Component {

  render() {
    return (
      <div id="budgetSearchWrapper">
        <Card shadow={0}
              style={{width: '100%', margin: 'auto', minHeight: '50px'}}>
          <CardTitle style={{color: '#fff', backgroundColor: '#9fa8da'}}>
            {i18n.getTranslation(keys.ORDER.SEARCH_TITLE)}
          </CardTitle>
          <CardText>
            <Textfield
              onChange={() => {
              }}
              id="searchOrders"
              label={i18n.getTranslation(keys.ORDER.SEARCH_IDENTIFICATOR)}
              floatingLabel
              style={{width: '100%'}}
            />
          </CardText>
        </Card>
      </div>
    );
  }

}
