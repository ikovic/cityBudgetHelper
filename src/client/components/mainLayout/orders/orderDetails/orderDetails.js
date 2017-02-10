import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';
import DetailsForm from './detailsForm/detailsForm';
import DetailsTable from './detailsTable/detailsTable';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class OrderDetails extends Component {

  render() {
    const isEditMode = this.props.options.edit;
    const isCreateMode = this.props.options.create;
    const isActive = isCreateMode || isEditMode;
    const order = this.props.item;

    return (
      <div id="orderDetailsWrapper">
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundColor: isActive ? '#e91e63' : '#9fa8da'}}>
            {i18n.getTranslation(keys.ORDER.DETAILS_CARD_TITLE)}
          </CardTitle>
          <CardText>
            <DetailsForm
              order={order}
              options={{edit: isEditMode, create: isCreateMode}}
            />
            {order ? <DetailsTable orderItems={order.orderItems}/> : null}
          </CardText>
          {(isEditMode || isCreateMode) ?
            <CardActions border>
              <Button colored onClick={() => this.props.saveItem(this.state)}>
                {i18n.getTranslation(keys.GENERAL.OK)}
              </Button>
              <Button colored onClick={this.props.cancelEdit}>
                {i18n.getTranslation(keys.GENERAL.CANCEL)}
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
