import React, {PropTypes} from 'react';
import {Textfield} from 'react-mdl';
import keys from '../../../../../translations/keys';
import i18n from '../../../../../util/i18n';

const DetailsForm = ({order, onChange}) => {

  return (
    <div>
      <Textfield
        id="positionInput"
        onChange={(event) => onChange('position', event.target.value)}
        value={this.state.position}
        label={i18n.getTranslation(keys.BUDGET_ITEM.POSITION)}
        floatingLabel
        style={{width: '100%'}}
      />
      <Textfield
        onChange={(event) => onChange('description', event.target.value)}
        value={this.state.description}
        label={i18n.getTranslation(keys.BUDGET_ITEM.DESCRIPTION)}
        floatingLabel
        rows={2}
        style={{width: '100%'}}
      />
      <Textfield
        onChange={(event) => onChange('amount', event.target.value)}
        value={this.state.amount}
        pattern="-?[0-9]*(\.[0-9]+)?"
        error={i18n.getTranslation(keys.BUDGET_ITEM.AMOUNT_ERROR)}
        label={i18n.getTranslation(keys.BUDGET_ITEM.AMOUNT)}
        floatingLabel
        style={{width: '100%'}}
      />
    </div>
  );

};

DetailsForm.propTypes = {
  order: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default DetailsForm;
