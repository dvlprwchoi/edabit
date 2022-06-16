const add = (n) => (x) => x + n;

function add(number1) {
  return function (number2) {
    return number1 + number2;
  };
}

console.log(add(-30)(80));
