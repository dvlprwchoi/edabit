// function testJackpot(result) {
//   if (
//     result[0] === result[1] &&
//     result[0] === result[2] &&
//     result[0] === result[3]
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function testJackpot(result) {
  return result.every((x) => x === result[0]);
}
