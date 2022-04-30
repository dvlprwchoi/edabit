// function intWithinBounds(n, lower, upper) {
//   if (Number.isInteger(n) === true) {
//     if (n >= lower && n < upper) {
//       return true;
//     } else {
//       return false;
//     }
//   } else {
//     return false;
//   }
// }

intWithinBounds = (n, lower, upper) =>
  Number.isInteger(n) === true
    ? n >= lower && n < upper
      ? true
      : false
    : false;
