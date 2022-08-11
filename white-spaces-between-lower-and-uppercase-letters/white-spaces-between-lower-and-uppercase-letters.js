function insertWhitespace(s) {
  const first = s[0];
  const sArr = s.slice(1).split('');
  let rest = [];
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] === sArr[i].toUpperCase()) {
      rest.push(' ' + sArr[i]);
    } else {
      rest.push(sArr[i]);
    }
  }
  return first + rest.join('');
}

function insertWhitespace(s) {
  let output = '';
  s.split('').forEach((chr, i) => {
    if (i > 0 && chr == chr.toUpperCase()) {
      output += ' ';
    }
    output += chr;
  });
  return output;
}
