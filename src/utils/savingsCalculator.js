const savingsCalculator = function() {
  return {
    calculateDailyExpenses: function (expenses) {
      return expenses.funExpenses + expenses.vehicleExpenses + expenses.housingExpenses + expenses.petExpenses + expenses.foodExpenses + expenses.travelExpenses;
    },
    calculateWeeklyExpenses: function (weeklyExpenses) {
      return weeklyExpenses*7;
    },
    calculateSavings: function (expenses, savings) {
      let currentExpenses  = this.calculateDailyExpenses(expenses);
      return savings.savingAccount - currentExpenses;
    },
  };
};

export default savingsCalculator;
