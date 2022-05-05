// function indexMultiplier(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += i * arr[i];
//   }
//   return sum;
// }

const indexMultiplier = (arr) =>
  arr.reduce((sum, value, index) => sum + index * value, 0);

console.log(indexMultiplier([1, 2, 3, 4, 5]));
