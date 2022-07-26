function arrayOperation(x, y, n) {
  let result = [];
  for (let i = x; i <= y; i++) {
    if (i % n === 0) {
      result.push(i);
    }
  }
  return result;
}

console.log(arrayOperation(1, 10, 3));
