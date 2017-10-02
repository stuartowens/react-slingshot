import React from 'react';
import PropTypes from 'prop-types';

const ExpenseResults = ({ fuelSavings }) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <h1>{fuelSavings.funExpenses}</h1>
  );
};

export default ExpenseResults;
