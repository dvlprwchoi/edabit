function amplify(num) {
  arr = [];
  for (let i = 1; i <= num; i++) {
    if (i % 4 === 0) {
      arr.push(i * 10);
    } else {
      arr.push(i);
    }
  }
  return arr;
}

const amplify = (num) => {
  let result = [];
  for (let i = 1; i <= num; i++) {
    result.push(i);
  }
  return result.map((x) => (x % 4 == 0 ? x * 10 : x));
};
