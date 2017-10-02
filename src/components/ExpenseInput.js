import React from 'react';
import PropTypes from 'prop-types';

const ExpenseInput = (props) => {
  const handleChange = (e) => {
    props.onChange(props.name, e.target.value);
  };

  return (
    <input
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={handleChange}/>
  );
};

export default ExpenseInput;
