const savingsCalculator = function() {
  return {
    calculateDailyExpenses: function (expenses) {
      return Number.parseInt(expenses.funExpenses) + Number.parseInt(expenses.vehicleExpenses) + Number.parseInt(expenses.housingExpenses) + Number.parseInt(expenses.petExpenses) + Number.parseInt(expenses.foodExpenses) + Number.parseInt(expenses.travelExpenses);
    },
    calculateWeeklyExpenses: function (dailyExpense) {
      return dailyExpense*7;
    },
    calculateSavings: function (expenses, savings) {
      const currentExpenses  = this.calculateDailyExpenses(expenses.dailyExpenses);
      return savings.savingAccount - currentExpenses;
    },
  };
};
Number

export default savingsCalculator;
