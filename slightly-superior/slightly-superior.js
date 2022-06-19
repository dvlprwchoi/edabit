// function isFirstSuperior(arr1, arr2) {
//   arr1ToStr = arr1.join('');
//   arr2ToStr = arr2.join('');
//   if (arr1ToStr != arr2ToStr) {
//     for (let i = 0; i < arr1ToStr.length; i++) {
//       if (arr1ToStr[i] > arr2ToStr[i]) {
//         return true;
//       } else if (arr1ToStr[i] == arr2ToStr[i]) {
//         continue;
//       } else {
//         return false;
//       }
//     }
//   }
//   return false;
// }

function isFirstSuperior(arr1, arr2) {
  return arr1 > arr2;
}

console.log(isFirstSuperior([true, 1, 'zebra'], [true, 2, 'zebra']));
