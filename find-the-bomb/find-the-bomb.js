// function bomb(str) {
//   return str.toLowerCase().includes('bomb')
//     ? 'Duck!!!'
//     : 'There is no bomb, relax.';
// }

const bomb = (s) => (/bomb/i.test(s) ? 'Duck!!!' : 'There is no bomb, relax.');

console.log(bomb('There is a bomb.'));
