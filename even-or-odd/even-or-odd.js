function evenOrOdd(arr) {
  return arr.length === 0 || arr.reduce((a, b) => a + b) % 2 === 0
    ? 'even'
    : 'odd';
}

const evenOrOdd = (arr) =>
  arr.reduce((acc, cur) => acc + cur, 0) % 2 !== 0 ? 'odd' : 'even';
