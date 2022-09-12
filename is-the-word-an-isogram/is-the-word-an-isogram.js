function isIsogram(str) {
  return str.length === new Set(str.toLowerCase()).size;
}

// function isIsogram(str) {
//   return (
//     str.toLowerCase().split('').sort().join('') ===
//     [...new Set(str.toLowerCase().split('').sort())].join('')
//   );
// }

console.log(isIsogram('Algorism'));
