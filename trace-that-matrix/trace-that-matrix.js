// function trace(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i][i];
//   }
//   return sum;
// }

function trace(arr) {
  return arr.reduce((a, b, i) => a + b[i], 0);
}
