// function getAbsSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += Math.abs(arr[i]);
//   }
//   return sum;
// }

function getAbsSum(arr) {
  return arr.reduce((count, num) => count + Math.abs(num), 0);
}

function getAbsSum(arr) {
  return arr.map((x) => Math.abs(x)).reduce((x, y) => x + y);
}
