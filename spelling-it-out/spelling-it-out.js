// function spelling(str) {
//   let arr = [];
//   for (let i = 1; i <= str.length; i++) {
//     arr.push(str.slice(0, i));
//   }
//   return arr;
// }

const spelling = (str) =>
  [...str].map((value, index) => str.slice(0, index + 1));

console.log(spelling('happy'));
