// function binary(decimal) {
//   let base = '';
//   if (decimal === 0) {
//     return '0';
//   }
//   while (decimal > 0) {
//     if (decimal % 2 !== 0) {
//       base += '1';
//     } else {
//       base += '0';
//     }
//     decimal = Math.floor(decimal / 2);
//   }
//   return base.split('').reverse().join('');
// }

function binary(decimal) {
  let result = '';
  if (decimal == 0) {
    result = '0';
  }
  while (decimal > 0) {
    result += decimal % 2;
    decimal = Math.floor(decimal / 2);
  }
  return result.split('').reverse().join('');
}

// function binary(decimal) {
//   return decimal.toString(2);
// }

console.log(binary(10));
