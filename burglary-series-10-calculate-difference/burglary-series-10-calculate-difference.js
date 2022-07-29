function calculateDifference(obj, limit) {
  return Object.values(obj).reduce((a, b) => a + b) - limit;
}

console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
