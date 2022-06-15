function multiplicationTable(n) {
  let mainArr = [];
  for (let i = 1; i <= n; i++) {
    let subArr = [];
    for (let j = 1; j <= n; j++) {
      subArr.push(i * j);
    }
    mainArr.push(subArr);
  }
  return mainArr;
}

const multiplicationTable = (n) =>
  Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i + 1) * (j + 1))
  );

console.log(multiplicationTable(3));
