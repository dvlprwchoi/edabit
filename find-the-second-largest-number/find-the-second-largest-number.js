function secondLargest(arr) {
  const sortedArr = arr.sort((a, b) => a - b);
  return sortedArr[sortedArr.length - 2];
}

function secondLargest(arr) {
  return arr.sort((a, b) => b - a)[1];
}
