function convertToDecimal(perc) {
  return perc.map((x) => parseFloat(x) / 100);
}

function convertToDecimal(perc) {
  return [...perc].map((p) => p.replace('%', '') / 100);
}

function convertToDecimal(perc) {
  return perc.map((i) => parseFloat(i.slice(0, i.length - 1)) / 100);
}

console.log(convertToDecimal(['45%', '32.123%', '97%', '33%']));
