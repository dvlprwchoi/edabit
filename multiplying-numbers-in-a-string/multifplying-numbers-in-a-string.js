// multiplyNums = (nums) =>
//   nums.split(',').length != 1
//     ? nums.split(',').reduce((a, b) => a * b)
//     : Number(nums);

function multiplyNums(nums) {
  return nums.split(', ').reduce((a, b) => a * +b, 1);
}

console.log(multiplyNums('-10'));
