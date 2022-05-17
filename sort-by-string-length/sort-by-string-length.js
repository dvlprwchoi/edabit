// function sortByLength(arr) {
//   const mapped = data.map((v, i) => {
//     return { i, value: someSlowOperation(v) };
//   });

//   mapped.sort((a, b) => {
//     if (a.value > b.value) {
//       return 1;
//     } else if (a.value < b.value) {
//       return -1;
//     }
//     return 0;
//   });
//   const result = mapped.map((v) => data[v.i]);
// }

function sortByLength(arr) {
  return arr.sort((a, b) => a.length - b.length);
}

console.log(sortByLength(['may', 'april', 'september', 'august']));
