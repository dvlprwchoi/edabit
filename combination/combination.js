// function combinations(items) {
//   let result = 1;
//   for (let i = 0; i < arguments.length; i++) {
//     if (arguments[i] == 0) {
//       arguments[i] = 1;
//     }
//     result *= arguments[i];
//   }
//   return result;
// }

function combinations(items) {
  return [...arguments].reduce((acc, item) => (item === 0 ? acc : acc * item));
}

console.log(combinations(2, 3, 4, 5));
