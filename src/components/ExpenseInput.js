import React from 'react';
import PropTypes from 'prop-types';
import ExpenseResult from './ExpenseResult'


const ExpenseInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <div>
    <input
      type="text"
      placeholder={props.placeholder}
      onChange={handleChange}/>
      <ExpenseResult fuelSavings={props.fuelSavings} />
      </div>
  );
};

export default ExpenseInput;
