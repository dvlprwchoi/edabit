// function mostExpensive(obj) {
//   const valueArr = Object.values(obj);
//   let mostExp = valueArr[0];
//   for (let i = 0; i < valueArr.length; i++) {
//     if (valueArr[i] >= mostExp) {
//       mostExp = valueArr[i];
//     }
//   }
//   const mostExpIndex = valueArr.indexOf(mostExp);
//   const mostExpensiveItem = Object.entries(obj)[mostExpIndex][0];
//   return `The most expensive one is the ${mostExpensiveItem}`;
// }

function mostExpensive(obj) {
  const max = Math.max(...Object.values(obj));
  for (const key in obj)
    if (obj[key] === max) return 'The most expensive one is the ' + key;
}

console.log(
  mostExpensive({
    'Diamond Earrings': 980,
    'Gold Watch': 250,
    'Pearl Necklace': 4650,
  })
);
