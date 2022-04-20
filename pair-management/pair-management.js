// function makePair(num1, num2) {
//   return [num1, num2];
// }

function makePair(num1, num2) {
  return [...arguments];
}
console.log(makePair(51, 21));
