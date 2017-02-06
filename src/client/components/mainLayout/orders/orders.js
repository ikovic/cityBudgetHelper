import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';

class Orders extends Component {
    render () {
        return (
            <section>
                <table className="mdl-data-table mdl-js-data-table mdl-data-table--selectable mdl-shadow--2dp">
                    <thead>
                    <tr><th className="mdl-data-table__cell--non-numeric">Student</th><th>Class</th><th>Grade</th></tr>
                    </thead>
                    <tbody>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mahesh Parashar</td><td>VI</td><td>A</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Rahul Sharma</td><td>VI</td><td>B</td></tr>
                    <tr><td className="mdl-data-table__cell--non-numeric">Mohan Sood</td><td>VI</td><td>A</td></tr>
                    </tbody>
                </table>
            </section>
        );
    }
}

function mapStateToProps(state) {
  return {
    budget: state.budget,
    organization: state.organization,
    orders: state.orders
  };
}

Orders.propTypes = {
  budget: PropTypes.object.isRequired,
  organization: PropTypes.object.isRequired,
  orders: PropTypes.array
};

export default connect(mapStateToProps)(Orders);
