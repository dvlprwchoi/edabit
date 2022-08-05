function leftDigit(num) {
  return parseInt([...num].find((x) => !isNaN(x)));
}

console.log(leftDigit('TrAdE2W1n95!'));
