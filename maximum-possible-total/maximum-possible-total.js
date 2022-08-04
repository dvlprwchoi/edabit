function maxTotal(nums) {
  nums = nums.sort((a, b) => a - b);
  lastFiveArr = nums.slice(5);
  return lastFiveArr.reduce((a, b) => a + b);
}

console.log(maxTotal([1, 1, 0, 1, 3, 10, 10, 10, 10, 1]));
