// function indexShuffle(str) {
//   let even = '';
//   let odd = '';
//   for (let i = 0; i < str.length; i++) {
//     if (i % 2 === 0) {
//       even += str[i];
//     } else {
//       odd += str[i];
//     }
//   }
//   return even + odd;
// }

function indexShuffle(str) {
  const even = [...str].filter((x, index) => index % 2 === 0);
  const odd = [...str].filter((x, index) => index % 2 === 1);
  return [...even, ...odd].join('');
}

console.log(indexShuffle('holiday'));
