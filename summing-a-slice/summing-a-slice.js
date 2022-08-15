function sliceSum(arr, n) {
  return n > arr.length
    ? arr.reduce((a, b) => a + b)
    : arr.slice(0, n).reduce((a, b) => a + b, 0);
}
