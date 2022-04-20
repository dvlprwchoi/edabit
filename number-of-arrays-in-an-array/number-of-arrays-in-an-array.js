function numOfSubbarrays(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!Array.isArray(arr[i])) {
      return 0;
    }
    return arr.length;
  }
}

console.log(
  numOfSubbarrays([
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
    [1, 2, 3],
  ])
);
