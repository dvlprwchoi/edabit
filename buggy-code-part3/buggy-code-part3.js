// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

let sumArray = (a) => a.reduce((a, b) => a + b);

console.log(sumArray([0, 4, 8, 12]));
