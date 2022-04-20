// function numOfSubbarrays(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (!Array.isArray(arr[i])) {
//       return 0;
//     }
//     return arr.length;
//   }
// }

// function numOfSubbarrays(arr) {
//   return Array.isArray(arr[0]) ? arr.length : 0;
// }

function numOfSubbarrays(arr) {
  return typeof arr[0] == 'number' ? 0 : arr.length;
}

console.log(
  numOfSubbarrays([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
