// function reverse(arr) {
//   const arr2 = arr.toString().split(',').reverse();
//   const arr3 = arr2.map((num) => Number(num));
//   return arr3;
// }

// reverse = (arr) =>
//   arr.length === 0
//     ? []
//     : arr
//         .toString()
//         .split(',')
//         .reverse()
//         .map((x) => Number(x));

function reverse(arr) {
  return arr.reverse();
}

console.log(reverse([4, 3, 2, 1]));
