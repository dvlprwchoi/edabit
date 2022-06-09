function numbersSum(arr) {
  const numArr = [];
  arr.forEach((element) => {
    if (typeof element === `number`) {
      numArr.push(element);
    }
  });
  return numArr.length !== 0 ? numArr.reduce((a, b) => a + b) : 0;
}
