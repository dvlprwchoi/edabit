function filterArray(arr) {
  return arr.filter((x) => typeof x === 'number');
}

function filterArray(arr) {
  return arr.filter((num) => Number.isInteger(num));
}
