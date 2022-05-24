// function capToFront(s) {
//   let upper = '';
//   let lower = '';
//   const s2 = s.toLowerCase();
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === s2[i]) {
//       lower += s[i];
//     } else {
//       upper += s[i];
//     }
//   }
//   return upper + lower;
// }

// function capToFront(s) {
//   return s.match(/[A-Z]/g).join('') + s.match(/[a-z]/g).join('');
// }

function capToFront(s) {
  let lowerCase = [...s].filter((l) => l === l.toLowerCase());
  let upperCase = [...s].filter((l) => l === l.toUpperCase());
  return [...upperCase, ...lowerCase].join('');
}

console.log(capToFront('moveMENT'));
