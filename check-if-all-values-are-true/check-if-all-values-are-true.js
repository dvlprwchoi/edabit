// function allTruthy(...args) {
//   let falseCount = 0;
//   args.map((x) => {
//     if (!x) {
//       falseCount++;
//     }
//   });
//   return falseCount > 0 ? false : true;
// }

const allTruthy = (...args) => args.every(Boolean);

console.log(allTruthy(true, true, true));
