const savingsCalculator = function() {
  return {
    calculateDailyExpenses: function (weeklyExpenses) {
      return weeklyExpenses/7;
    }
  }
}

export default savingsCalculator
