// function findLargestNums(arr) {
//   const newArr = [];
//   arr.forEach((element) => {
//     newArr.push(Math.max(...element));
//   });
//   return newArr;
// }

function findLargestNums(arr) {
  return arr.map((x) => Math.max(...x));
}

console.log(
  findLargestNums([
    [0.4321, 0.7634, 0.652],
    [1.324, 9.32, 2.5423, 6.4314],
    [9, 3, 6, 3],
  ])
);
