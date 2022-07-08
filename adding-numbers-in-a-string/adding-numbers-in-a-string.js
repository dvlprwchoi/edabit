function addNums(nums) {
  return nums
    .split(', ')
    .map((x) => parseInt(x))
    .reduce((a, b) => a + b);
}

console.log(addNums('1, 2, 3, 4, 5, 6, 7'));
