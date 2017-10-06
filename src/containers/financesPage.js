import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/financeActions';
import DailyExpensesForm from '../components/DailyExpensesForm'

export const FinancesPage = (props) => {
  return (
    <div>Hi
      <DailyExpensesForm
        calculateSavings = {props.actions.calculateSavings}
        expenses={props.expenses}
      />
    </div>


  );
};

FinancesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  expenses: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    expenses: state.calculateSavingsReducer
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FinancesPage);
