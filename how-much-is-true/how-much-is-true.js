// function countTrue(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (!arr[i] === false || arr === []) {
//       count += 1;
//     }
//   }
//   return count;
// }

function countTrue(arr) {
  return arr.filter((x) => x == true).length;
}

console.log(countTrue([false, false, false, false, true]));
