// function oddOrEven(s) {
//   if (s.length % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function oddOrEven(s) {
  return [true, false][s.length % 2];
}

console.log(oddOrEven('cherry'));
