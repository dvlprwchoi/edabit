function getOnlyEvens(nums) {
  const newNums = nums.filter((num, i) => num % 2 === 0 && i % 2 === 0);
  return newNums;
}
