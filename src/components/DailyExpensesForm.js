import React from 'react';
import PropTypes from 'prop-types';

class DailyExpensesForm extends React.Component {
  constructor (props) {
    super(props)

    this.expensesKeyPress = this.expensesKeyPress.bind(this)
  }
  expensesKeyPress(name, value) {
    this.props.calculateSavings(this.props.fuelSavings, name, value)
  }
  render() {
    const{fuelSavings} = this.props;
    return (
      <div>
        
      </div>
    )
  }
}

export default DailyExpensesForm;
