function getNumberOfApples(n, p) {
  const pNum = parseInt(p.slice(0, -1)) / 100;
  const childrenApple = Math.floor(n - n * pNum);
  return childrenApple < 1
    ? `The children didn't get any apples`
    : childrenApple;
}

console.log(getNumberOfApples(10, '90%'));
