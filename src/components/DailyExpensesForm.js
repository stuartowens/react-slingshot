import React from 'react';
import PropTypes from 'prop-types';
import ExpenseInput from './ExpenseInput';
import ExpenseResult from './ExpenseResult';


class DailyExpensesForm extends React.Component {
  constructor (props, context) {
    super(props, context);

    this.expensesKeyPress = this.expensesKeyPress.bind(this);
  }
  expensesKeyPress(name, value) {
    this.props.calculateSavings(this.props.expenses, name, value);
  }
  render() {
    const{ expenses } = this.props;
    console.log(expenses, "expensesessssss33333");
    return (
      <div>
        <h2>Expense Report</h2>
        <ExpenseInput onChange={this.expensesKeyPress} placeholder="Fun Expenses" name="funExpenses" expenses={expenses}/>
        <ExpenseInput onChange={this.expensesKeyPress} placeholder="Vehicle Expenses" name="vehicleExpenses" expenses={expenses}/>
        <ExpenseInput onChange={this.expensesKeyPress} placeholder="Travel Expenses" name="travelExpenses" expenses={expenses}/>
        <ExpenseInput onChange={this.expensesKeyPress} placeholder="Food Expenses" name="foodExpenses" expenses={expenses}/>
        <ExpenseResult expense={expenses.funExpenses} label="Fun Expense"/>
        <ExpenseResult expense={expenses.vehicleExpenses} label="Vehicle Expense"/>
        <ExpenseResult expense={expenses.travelExpenses} label="Travel Expense"/>
        <ExpenseResult expense={expenses.foodExpenses} label="Food Expense"/>
        <ExpenseResult expense={expenses.dailyExpense} label="Daily Expense"/>
        <ExpenseResult expense={expenses.weeklyExpenses} label="Weekly Expenses"/>

      </div>
    )
  }
}

export default DailyExpensesForm;
