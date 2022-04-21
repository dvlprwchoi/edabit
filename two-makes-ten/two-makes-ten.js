// function makesTen(a, b) {
//   return a + b === 10 || a === 10 || b === 10 ? true : false;
// }

const makesTen = (a, b) => [a, b, a + b].includes(10);

console.log(makesTen(9, 9));
