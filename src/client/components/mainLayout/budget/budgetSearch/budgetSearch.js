import React, {Component, PropTypes} from 'react';
import {Card, CardText, CardTitle, Textfield} from 'react-mdl';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class BudgetSearch extends Component {

  render() {
    return (
      <div id="budgetSearchWrapper">
        <Card shadow={0}
              style={{width: '100%', margin: 'auto', minHeight: '50px'}}>
          <CardTitle style={{color: '#fff', backgroundColor: '#9fa8da'}}>
            {i18n.getTranslatedString(keys.BUDGET_SEARCH.CARD_TITLE)}
          </CardTitle>
          <CardText>
            <Textfield
              onChange={() => {
              }}
              id="searchBudgetItems"
              label={i18n.getTranslatedString(keys.BUDGET_SEARCH.POSITION)}
              floatingLabel
              style={{width: '100%'}}
            />
          </CardText>
        </Card>
      </div>
    );
  }

}
