function numberSquares(n) {
  if (n === 0) {
    return 0;
  } else if (n > 0) {
    return n ** 2 + numberSquares(n - 1);
  }
}
