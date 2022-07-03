function reverseArr(num) {
  return num
    .toString()
    .split('')
    .reverse()
    .map((x) => parseInt(x));
}
