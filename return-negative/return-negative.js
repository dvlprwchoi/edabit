returnNegative = (n) => (n == 0 ? 0 : -Math.abs(n));

function returnNegative(n) {
  return n < 0 ? n : n * -1;
}
