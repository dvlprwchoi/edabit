// function addUp(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//   }
//   return sum;
// }

// function addUp(num) {
//   return (num * (num + 1)) / 2;
// }

function addUp(num) {
  if (num === 1) return 1;
  return num + addUp(num - 1);
}

console.log(addUp(13));
