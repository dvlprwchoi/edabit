// function backToHome(directions) {
//   directions = directions.split('');
//   let fourDirection = { north: 0, south: 0, east: 0, west: 0 };
//   for (let i = 0; i < directions.length; i++) {
//     if (directions[i] === 'N') {
//       fourDirection.north++;
//     } else if (directions[i] === 'S') {
//       fourDirection.south++;
//     } else if (directions[i] === 'E') {
//       fourDirection.east++;
//     } else if (directions[i] === 'W') {
//       fourDirection.west++;
//     }
//   }
//   return (
//     fourDirection.north === fourDirection.south &&
//     fourDirection.east === fourDirection.west
//   );
// }

function backToHome(directions) {
  const north = directions.split('').filter((x) => x == 'N').length;
  const south = directions.split('').filter((x) => x == 'S').length;
  const east = directions.split('').filter((x) => x == 'E').length;
  const west = directions.split('').filter((x) => x == 'W').length;
  return north == south && east == west;
}

console.log(backToHome('NENESSWW'));
