function mean(num) {
  return (
    num
      .toString()
      .split('')
      .map((x) => parseInt(x))
      .reduce((a, b) => a + b) / num.toString().length
  );
}
