function objectToArray(obj) {
  return Object.entries(obj);
}

console.log(
  objectToArray({
    D: 1,
    B: 2,
    C: 3,
  })
);
