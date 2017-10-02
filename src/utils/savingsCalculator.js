const savingsCalculator = function() {
  return {
    calculateDailyExpenses: function (expenses) {
      return expenses.funExpenses + expenses.vehicleExpenses + expenses.housingExpenses + expenses.petExpenses + expenses.foodExpenses + expenses.travelExpenses;
    },
    calculateWeeklyExpenses: function (weeklyExpenses) {
      return weeklyExpenses*7;
    },
    calculateSavings: function (expenses, savings) {
      const currentExpenses  = this.calculateDailyExpenses(expenses.dailyExpenses);
      return savings.savingAccount - currentExpenses;
    },
  };
};

export default savingsCalculator;
