// dividesEvenly = (a, b) => Number.isInteger(a / b);

function dividesEvenly(a, b) {
  return a % b === 0;
}

console.log(dividesEvenly(85, 4));
