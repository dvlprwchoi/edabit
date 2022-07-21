function seriesResistance(arr) {
  const total = arr.reduce((a, b) => a + b);
  const totalStr = total.toString();
  return total <= 1 ? totalStr + ' ohm' : totalStr + ' ohms';
}

console.log(seriesResistance([1, 5, 6, 3]));
