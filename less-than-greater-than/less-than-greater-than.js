// function arrBetween(num1, num2, arr) {
//   const result = [];
//   arr.map((x) => {
//     if (num1 < x && x < num2) {
//       result.push(x);
//     }
//   });
//   return result;
// }

function arrBetween(num1, num2, arr) {
  return arr.filter((n) => n > num1 && n < num2);
}

console.log(arrBetween(1, 10, [1, 10, 25, 8, 11, 6]));
