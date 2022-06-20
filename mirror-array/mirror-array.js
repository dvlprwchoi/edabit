// function mirror(arr) {
//   const arr1 = [...arr].slice(0, arr.length - 1);
//   const arr2 = arr.reverse();
//   return [...arr1, ...arr2];
// }

const mirror = (arr) => [...arr, ...arr.reverse().slice(1)];

// const mirror = (arr) => arr.concat(arr.slice(0, -1).reverse());

console.log(mirror([3, 5, 6, 7, 8]));
