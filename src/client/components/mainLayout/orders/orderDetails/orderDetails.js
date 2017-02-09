import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield} from 'react-mdl';
import DetailsForm from './detailsForm/detailsForm';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class OrderDetails extends Component {

  render() {
    const isEditMode = this.props.options.edit;
    const isCreateMode = this.props.options.create;
    const isActive = isCreateMode || isEditMode;

    return (
      <div id="budgetItemWrapper">
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundColor: isActive ? '#e91e63' : '#9fa8da'}}>
            {i18n.getTranslation(keys.BUDGET_ITEM.CARD_TITLE)}
          </CardTitle>
          <CardText>
            <DetailsForm order={this.props.item}
                         options={{edit: isEditMode, create: isCreateMode}}
            />
          </CardText>
          {(isEditMode || isCreateMode) ?
            <CardActions border>
              <Button colored onClick={() => this.props.saveItem(this.state)}>
                {i18n.getTranslation(keys.BUDGET_ITEM.CONFIRM)}
              </Button>
              <Button colored onClick={this.props.cancelEdit}>
                {i18n.getTranslation(keys.BUDGET_ITEM.CANCEL)}
              </Button>
            </CardActions>
            :
            null
          }
        </Card>
      </div>
    );
  }
}

OrderDetails.propTypes = {
  cancelEdit: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  item: PropTypes.object,
  options: PropTypes.object
};
