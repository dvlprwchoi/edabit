// function oddishOrEvenish(num) {
//   const numArr = num.toString().split('');
//   let sum = 0;
//   for (let i = 0; i < numArr.length; i++) {
//     sum += Number(numArr[i]);
//   }
//   return sum % 2 === 0 ? 'Evenish' : 'Oddish';
// }

// function oddishOrEvenish(num) {
//   return `${num}`.split('').reduce((a, b) => a * 1 + b * 1) % 2 == 0
//     ? 'Evenish'
//     : 'Oddish';
// }

function oddishOrEvenish(num) {
  return num
    .toString()
    .split('')
    .reduce((p, c) => Number(p) + Number(c)) %
    2 ==
    0
    ? 'Evenish'
    : 'Oddish';
}

// const oddishOrEvenish = (n) =>
//   String(n)
//     .split('')
//     .reduce((a, b) => +a + +b) % 2
//     ? 'Oddish'
//     : 'Evenish';

console.log(oddishOrEvenish(373));
