// function isSubset(arr1, arr2) {
//   const uniqueValueArr2 = [...new Set(arr2)];
//   for (const i in arr1) {
//     if (uniqueValueArr2.includes(arr1[i]) === false) {
//       return false;
//     }
//   }
//   return true;
// }

function isSubset(arr1, arr2) {
  const uniqueValueArr2 = [...new Set(arr2)];
  return arr1.every((x) => uniqueValueArr2.includes(x));
}

function isSubset(arr1, arr2) {
  return arr1.every((val) => arr2.includes(val));
}

console.log(isSubset([3, 2, 5], [5, 3, 7, 9, 2]));
