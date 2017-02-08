import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield} from 'react-mdl';
import DetailsForm from './detailsForm/detailsForm';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class OrderDetails extends Component {

  constructor() {
    super();

    this.state = {
      id: null,
      position: '',
      description: '',
      amount: ''
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.item) {
      this.setState({
        id: nextProps.item.id,
        position: nextProps.item.position,
        description: nextProps.item.description,
        amount: nextProps.item.amount
      });
    } else {
      this.setState({
        id: null,
        position: '',
        description: '',
        amount: ''
      });
    }
  }

  componentDidUpdate(prevProps) {
    const isEditMode = this.props.options.edit;
    const isCreateMode = this.props.options.create;
    const isActive = isCreateMode || isEditMode;

    if ((isActive) && (isEditMode !== prevProps.options.edit || isCreateMode !== prevProps.options.create)) {
      document.getElementById('positionInput').focus();
    }
  }

  render() {
    const isEditMode = this.props.options.edit;
    const isCreateMode = this.props.options.create;
    const isActive = isCreateMode || isEditMode;

    //<DetailsForm order={this.props.item} onChange={this.handleChange}/>

    return (
      <div id="budgetItemWrapper">
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundColor: isActive ? '#e91e63' : '#9fa8da'}}>
            {i18n.getTranslation(keys.BUDGET_ITEM.CARD_TITLE)}
          </CardTitle>
          <CardText>

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
