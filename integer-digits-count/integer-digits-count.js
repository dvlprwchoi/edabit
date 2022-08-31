function count(n) {
  return n !== 0 ? Math.floor(Math.log10(Math.abs(n))) + 1 : 1;
}
