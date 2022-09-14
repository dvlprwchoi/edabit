function rotateMaxNumber(num) {
  return parseInt(
    num
      .toString()
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}
