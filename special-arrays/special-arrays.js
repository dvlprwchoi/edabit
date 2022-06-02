// function isSpecialArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       (i % 2 === 0 && arr[i] % 2 !== 0) ||
//       (i % 2 !== 0 && arr[i] % 2 === 0)
//     ) {
//       return false;
//     }
//   }
//   return true;
// }

function isSpecialArray(arr) {
  return arr.every((element, index) => element % 2 === index % 2);
}

console.log(isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]));
