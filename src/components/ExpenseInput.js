import React from 'react';
import PropTypes from 'prop-types';



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

      </div>
  );
};

export default ExpenseInput;
