// function absolute(n) {
//   if (n < 0) {
//     const nArr = n.toString().split('');
//     return parseFloat(nArr.slice(1).join(''));
//   } else {
//     return n;
//   }
// }

const absolute = (n) => (n < 0 ? -n : n);

console.log(absolute(-1.21719794));
