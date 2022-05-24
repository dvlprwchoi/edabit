// function leapYear(year) {
//   if (year % 100 === 0) {
//     if (year % 400) {
//       return true;
//     } else {
//       return false;
//     }
//   } else if (year % 4 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

function leapYear(year) {
  return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
}
