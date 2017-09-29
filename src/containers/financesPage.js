import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../actions/financeActions';

export const FinancesPage = (props) => {
  return (
    <div>Hi</div>
  );
};
function mapStateToProps(state) {
  return {
    Savings: state.Savings
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
