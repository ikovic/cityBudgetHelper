import React, {Component, PropTypes} from 'react';
import {Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Textfield} from 'react-mdl';
import i18n from '../../../../util/i18n';
import keys from '../../../../translations/keys';

export default class BudgetItem extends Component {

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

    return (
      <div id="budgetItemWrapper">
        <Card shadow={0} style={{width: '100%', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', backgroundColor: isActive ? '#e91e63' : '#9fa8da'}}>
            {i18n.getTranslatedString(keys.BUDGET_ITEM.CARD_TITLE)}
          </CardTitle>
          <CardText>
            <Textfield
              id="positionInput"
              onChange={(event) => this.handleChange('position', event.target.value)}
              value={this.state.position}
              label={i18n.getTranslatedString(keys.BUDGET_ITEM.POSITION)}
              floatingLabel
              style={{width: '100%'}}
            />
            <Textfield
              onChange={(event) => this.handleChange('description', event.target.value)}
              value={this.state.description}
              label={i18n.getTranslatedString(keys.BUDGET_ITEM.DESCRIPTION)}
              floatingLabel
              rows={2}
              style={{width: '100%'}}
            />
            <Textfield
              onChange={(event) => this.handleChange('amount', event.target.value)}
              value={this.state.amount}
              pattern="-?[0-9]*(\.[0-9]+)?"
              error={i18n.getTranslatedString(keys.BUDGET_ITEM.AMOUNT_ERROR)}
              label={i18n.getTranslatedString(keys.BUDGET_ITEM.AMOUNT)}
              floatingLabel
              style={{width: '100%'}}
            />
          </CardText>
          {(isEditMode || isCreateMode) ?
            <CardActions border>
              <Button colored onClick={() => this.props.saveItem(this.state)}>
                {i18n.getTranslatedString(keys.BUDGET_ITEM.CONFIRM)}
              </Button>
              <Button colored onClick={this.props.cancelEdit}>
                {i18n.getTranslatedString(keys.BUDGET_ITEM.CANCEL)}
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

BudgetItem.propTypes = {
  cancelEdit: PropTypes.func.isRequired,
  saveItem: PropTypes.func.isRequired,
  item: PropTypes.object,
  options: PropTypes.object
};
