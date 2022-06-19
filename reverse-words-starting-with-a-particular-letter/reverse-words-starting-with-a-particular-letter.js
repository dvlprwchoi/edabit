function specialReverse(s, c) {
  s = s.split(' ');
  let sReversed = s.map((x) => {
    if (x.startsWith(c)) {
      return x.split('').reverse().join('');
    } else return x;
  });
  return sReversed.join(' ');
}

console.log(specialReverse('peter piper picked pickled peppers', 'p'));
