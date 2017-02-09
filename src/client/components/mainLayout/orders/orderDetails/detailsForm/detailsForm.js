import React, {PropTypes, Component} from 'react';
import {Textfield} from 'react-mdl';
import keys from '../../../../../translations/keys';
import i18n from '../../../../../util/i18n';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import Select from 'react-select';

class DetailsForm extends Component {

  constructor() {
    super();

    this.state = {
      id: null,
      identificator: '',
      dateReceived: '',
      momentReceived: moment(),
      type: '',
      options: null
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.order) {
      this.setState({
        id: nextProps.order.id,
        identificator: nextProps.order.identificator,
        dateReceived: nextProps.order.dateReceived,
        momentReceived: moment(nextProps.order.dateReceived),
        type: nextProps.order.type
      });
    } else {
      this.setState({
        id: null,
        identificator: '',
        dateReceived: '',
        momentReceived: moment(),
        type: ''
      });
    }
  }

  componentDidUpdate(prevProps) {
    const isEditMode = this.props.options.edit;
    const isCreateMode = this.props.options.create;
    const isActive = isCreateMode || isEditMode;

    if ((isActive) && (isEditMode !== prevProps.options.edit || isCreateMode !== prevProps.options.create)) {
      document.getElementById('identificatorInput').focus();
    }
  }

  handleChange(name, value) {
    this.setState({
      [name]: value
    });
  }

  render() {

    const options = [
      {value: 'wares', label: i18n.getTranslation(keys.ORDER.DROPDOWN_TYPES_WARES)},
      {value: 'service', label: i18n.getTranslation(keys.ORDER.DROPDOWN_TYPES_SERVICE)}
    ];

    return (
      <div>
        <Textfield
          id="identificatorInput"
          onChange={(event) => this.handleChange('identificator', event.target.value)}
          value={this.state.identificator}
          label={i18n.getTranslation(keys.BUDGET_ITEM.POSITION)}
          floatingLabel
          style={{width: '100%'}}
        />
        <Textfield
          onChange={(event) => this.handleChange('dateReceived', event.target.value)}
          value={this.state.dateReceived}
          label={i18n.getTranslation(keys.BUDGET_ITEM.DESCRIPTION)}
          floatingLabel
          rows={2}
          style={{width: '100%'}}
        />
        <DatePicker
          selected={this.state.momentReceived}
          onChange={(date) => this.handleChange('momentReceived', date)}
        />

        <Select name="type"
                options={options}
                onChange={(value) => this.handleChange('type', value)}
                value={this.state.type}/>

        <Textfield
          onChange={(event) => this.handleChange('type', event.target.value)}
          value={this.state.type}
          label={i18n.getTranslation(keys.BUDGET_ITEM.AMOUNT)}
          floatingLabel
          style={{width: '100%'}}
        />
      </div>
    )
  }
}

DetailsForm.propTypes = {
  options: PropTypes.object.isRequired
};

export default DetailsForm;
