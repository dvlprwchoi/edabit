function sumOfCubes(nums) {
  return nums.reduce((a, b) => a + b ** 3, 0);
}

// function sumOfCubes(nums) {
//   if (nums.length !== 0) {
//     let sum = 0;
//     for (let i = 0; i < nums.length; i++) {
//       sum += nums[i] ** 3;
//     }
//     return sum;
//   } else {
//     return 0;
//   }
// }

console.log(sumOfCubes([3, 4, 5]));
