import React from 'react';
import PropTypes from 'prop-types';
import ExpenseInput from './ExpenseInput'


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
        <h2>Expense Report</h2>
        <ExpenseInput onChange={this.expensesKeyPress} name="funExpenses" value={fuelSavings.funExpenses}/>
      </div>
    )
  }
}

export default DailyExpensesForm;
