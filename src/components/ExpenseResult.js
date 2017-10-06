import React from 'react';
import PropTypes from 'prop-types';

const ExpenseResult = ({ expense, label }) => {
  return (
    <h3>{label}: {expense}</h3>
  );
};

export default ExpenseResult;
