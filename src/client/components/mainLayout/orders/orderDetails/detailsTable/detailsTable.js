import React, {PropTypes} from 'react';
import {DataTable, TableHeader, IconButton} from 'react-mdl';
import i18n from '../../../../../util/i18n';
import keys from '../../../../../translations/keys';
import moment from 'moment';

const DetailsTable = ({orderItems}) => {

  return (
    <DataTable id="orderItemsTable"
               rows={orderItems}
    >
      <TableHeader name="title">{i18n.getTranslation(keys.ORDER.IDENTIFICATOR)}</TableHeader>
    </DataTable>
  );

};

DetailsTable.propTypes = {
  orderItems: PropTypes.array.isRequired
};

export default DetailsTable;
