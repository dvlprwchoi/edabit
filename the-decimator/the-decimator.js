// function DECIMATOR(str) {
//   const charNum = str.length;
//   const rmChar = Math.ceil(charNum / 10);
//   return str.slice(0, charNum - rmChar);
// }

function DECIMATOR(str) {
  const n = Math.ceil(str.length / 10);
  return str.slice(0, -n);
}

console.log(DECIMATOR('123456789012345678901'));
