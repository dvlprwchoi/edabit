// function doubleChar(str) {
//   const strArr = str.split('');
//   let result = [];
//   for (x in strArr) {
//     result += strArr[x].repeat(2);
//   }
//   return result;
// }

const doubleChar = (s) => s.replace(/./g, (s) => s + s);

function doubleChar(str) {
  return str
    .split('')
    .map((x) => x + x)
    .join('');
}
console.log(doubleChar('String'));
