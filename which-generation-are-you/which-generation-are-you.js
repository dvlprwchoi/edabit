// function generation(x, y) {
//   let result = '';
//   if (x === 0) {
//     result += 'me!';
//   }

//   while (x > 0) {
//     if (Math.abs(x) === 1) {
//       result += '';
//     } else if (Math.abs(x) === 2) {
//       result += 'grand';
//     } else if (Math.abs(x) === 3) {
//       result += 'great grand';
//     }

//     if (y === 'f') {
//       result += 'daughter';
//     } else if (y === 'm') {
//       result += 'son';
//     }
//     break;
//   }

//   while (x < 0) {
//     if (Math.abs(x) === 1) {
//       result += '';
//     } else if (Math.abs(x) === 2) {
//       result += 'grand';
//     } else if (Math.abs(x) === 3) {
//       result += 'great grand';
//     }

//     if (y === 'f') {
//       result += 'mother';
//     } else if (y === 'm') {
//       result += 'father';
//     }
//     break;
//   }

//   return result;
// }

function generation(x, y) {
  const elo = {
    '-3': { m: 'great grandfather', f: 'great grandmother' },
    '-2': { m: 'grandfather', f: 'grandmother' },
    '-1': { m: 'father', f: 'mother' },
    0: { m: 'me!', f: 'me!' },
    1: { m: 'son', f: 'daughter' },
    2: { m: 'grandson', f: 'granddaughter' },
    3: { m: 'great grandson', f: 'great granddaughter' },
  };
  return elo[x][y];
}

console.log(generation(0, 'f'));
