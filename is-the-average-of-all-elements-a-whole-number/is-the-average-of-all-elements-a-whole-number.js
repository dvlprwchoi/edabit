function isAvgWhole(arr) {
  return Number.isInteger(arr.reduce((a, b) => a + b) / arr.length);
}
