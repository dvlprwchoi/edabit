// function addsNum(n) {
//   function adds(num) {
//     return n + num;
//   }
//   return adds;
// }

// adds1 = addsNum(1)

// adds1(3) ➞ 4
// adds1(5.7) ➞ 6.7

// adds10 = addsNum(10)

// adds10(44) ➞ 54
// adds10(20) ➞ 30

const addsNum = (x) => (y) => x + y;

console.log(addsNum(5.7));
