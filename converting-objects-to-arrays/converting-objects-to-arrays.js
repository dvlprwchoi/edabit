// function toArray(obj) {
//   return Object.entries(obj);
// }

function toArray(obj) {
  let arr = [];
  Object.keys(obj).forEach((key) => arr.push([key, obj[key]]));
  return arr;
}

// toArray = (obj) => Object.entries(obj);

console.log(toArray({ shrimp: 15, tots: 12 }));
