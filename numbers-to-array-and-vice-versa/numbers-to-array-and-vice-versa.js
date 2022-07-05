function toArray(num) {
  return [...num.toString()].map((x) => parseInt(x));
}

function toNumber(arr) {
  return parseInt(arr.join(''));
}

console.log(toArray(235));
console.log(toArray(0));
console.log(toNumber([2, 3, 5]));

console.log(toNumber([0]));
