function paths(n) {
  if (n > 1) {
    return n * paths(n - 1);
  } else if (n === 1) {
    return n;
  }
}
