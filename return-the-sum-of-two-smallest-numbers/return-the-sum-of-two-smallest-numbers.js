function sumTwoSmallestNums(arr) {
  const posNumArr = arr.filter((x) => x > 0);
  const lowestTwo = posNumArr.sort((a, b) => a - b).slice(0, 2);
  return lowestTwo.reduce((a, b) => a + b);
}

console.log(
  sumTwoSmallestNums([879, 953, 694, -847, 342, 221, -91, -723, 791, -587])
);
