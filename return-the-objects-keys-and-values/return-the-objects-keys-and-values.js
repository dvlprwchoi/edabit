// function keysAndValues(obj) {
//   return [Object.keys(obj), Object.values(obj)];
// }

function keysAndValues(obj) {
  return [Object.keys(obj), Object.keys(obj).map((x) => obj[x])];
}

console.log(keysAndValues({ a: 1, b: 2, c: 3 }));
