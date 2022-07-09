function getBudgets(arr) {
  let budgetSum = 0;
  arr.map((x) => {
    budgetSum += x.budget;
  });
  return budgetSum;
}

function getBudgets(arr) {
  return arr.map((x) => x.budget).reduce((a, b) => a + b);
}
