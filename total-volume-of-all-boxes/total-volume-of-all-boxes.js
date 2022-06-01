// function totalVolume(...boxes) {
//   let totalBoxVolume = 0;
//   for (const box of boxes) {
//     const singleBoxVolume = box.reduce((a, b) => a * b);
//     totalBoxVolume += singleBoxVolume;
//   }
//   return totalBoxVolume;
// }

const totalVolume = (...boxes) =>
  boxes.reduce((total, [l, w, h]) => total + l * w * h, 0);

// function totalVolume(...boxes) {
//   return boxes.map((x) => x.reduce((a, b) => a * b)).reduce((a, b) => a + b);
// }

console.log(totalVolume([4, 2, 4], [3, 3, 3], [1, 1, 2], [2, 1, 1]));
