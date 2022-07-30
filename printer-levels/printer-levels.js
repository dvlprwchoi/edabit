function inkLevels(inks) {
  return Math.min(...Object.values(inks));
}

console.log(
  inkLevels({
    cyan: 432,
    magenta: 543,
    yellow: 777,
  })
);
