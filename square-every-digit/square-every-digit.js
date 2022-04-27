// function squareDigits(n) {
//   const nArr = n.toString().split('');
//   console.log(nArr);
//   const nArr2 = nArr.map((x) => parseInt(x) ** 2);
//   console.log(nArr2);
//   const result = nArr2.join('');
//   console.log(result);
// }

squareDigits = (n) =>
  parseInt(
    n
      .toString()
      .split('')
      .map((x) => parseInt(x) ** 2)
      .join('')
  );

console.log(squareDigits(3212));
