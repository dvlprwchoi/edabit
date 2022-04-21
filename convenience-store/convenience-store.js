// const changeEnough = (change, amountDue) =>
//   change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01 >=
//   amountDue
//     ? true
//     : false;

const sum = (arr) => arr.reduce((total, num) => total + num, 0);

const values = [0.25, 0.1, 0.05, 0.01];

const changeEnough = (change, amountDue) =>
  sum(change.map((amount, i) => amount * values[i])) >= amountDue;

console.log(changeEnough([10, 0, 0, 50], 3.85));
