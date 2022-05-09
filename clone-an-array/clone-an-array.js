// function clone(arr) {
//   arr.push([...arr]);
//   return arr;
// }

const clone = (r) => [...r, r];

console.log(clone([1, 2, 3]));
