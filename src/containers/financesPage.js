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
        fuelSavings={props.fuelSavings}
      />
    </div>


  );
};

FinancesPage.propTypes = {
  actions: PropTypes.object.isRequired,
  fuelSavings: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    fuelSavings: state.fuelSavings
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
