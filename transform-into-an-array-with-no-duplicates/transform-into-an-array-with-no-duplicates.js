// function set(arr) {
//   return Array.from(new Set(arr));
// }

function set(arr) {
  return [...new Set(arr)];
}
console.log(set([1, 3, 3, 5, 5]));
