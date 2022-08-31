// let fixImport = (s) => `from${s.split(' from').reverse().join(' ')}`;

const fixImport = (s) => {
  let [a, b, c, d] = s.split(' ');
  return `${c} ${d} ${a} ${b}`;
};
console.log(fixImport('import randint from random'));
