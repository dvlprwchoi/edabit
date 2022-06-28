function marathonDistance(d) {
  if (d.length) {
    const distance = d.map((x) => Math.abs(x));
    const total = distance.reduce((a, b) => a + b);
    return total === 25;
  } else if (d.length === 0 || d == null) {
    return false;
  }
}

console.log(marathonDistance([9, 7, 6, 5]));
