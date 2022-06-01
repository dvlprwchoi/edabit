// function repeatString(txt, n) {
//   let result = '';
//   if (typeof txt !== `string`) {
//     return 'Not A String !!';
//   } else {
//     for (let i = 0; i < n; i++) {
//       result += txt;
//     }
//     return result;
//   }
// }

function repeatString(txt, n) {
  return typeof txt === 'string' ? txt.repeat(n) : 'Not A String !!';
}

console.log(repeatString('Matt', 3));
