// function spaceMeOut(str) {
//   return (
//     str[0] +
//     str
//       .slice(1)
//       .split('')
//       .map((x) => ' ' + x)
//       .join('')
//   );
// }

const spaceMeOut = (str) => [...str].join(' ');

console.log(spaceMeOut('space'));
