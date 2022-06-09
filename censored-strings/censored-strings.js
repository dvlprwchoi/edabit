function uncensor(str, vowels) {
  const strArr = str.split('');
  const vowelsArr = vowels.split('');
  return strArr.map((x) => (x === `*` ? vowelsArr.shift() : x)).join('');
}

function uncensor(str, vowels) {
  for (let i = 0; i < vowels.length; i++) {
    str = str.replace('*', vowels[i]);
  }
  return str;
}
console.log(uncensor('*PP*RC*S*', 'UEAE'));
