function highLow(str) {
  const strArr = str.split(' ');
  const numArr = strArr.map((x) => parseInt(x));
  const max = Math.max(...numArr);
  const min = Math.min(...numArr);
  return `${max} ${min}`;
}

console.log(highLow('1 9 3 4 -5'));
