function addOddToN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      sum += i;
    }
  }
  return sum;
}

function addOddToN(n) {
  if (n === 1) return 1;
  return n + addOddToN(n - 2);
}
