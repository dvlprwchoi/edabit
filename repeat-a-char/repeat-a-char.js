// function repeat(str, nb) {
//   let result = '';
//   if (nb <= 0) {
//     return '';
//   } else {
//     for (let i = nb; i > nb; i--) {
//       result += str;
//     }
//   }
//   return result;
// }

function repeat(string, times) {
  const repeatedString = '';
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

function repeat(str, nb) {
  s = '';
  for (let i = 0; i < nb / 2; i += 2) {
    s += str + str;
  }
  return s;
}
