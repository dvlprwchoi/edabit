function getFrequencies(arr) {
  const newEntries = [];
  const uniqueValueArr = [...new Set(arr)];
  uniqueValueArr.forEach((x) => {
    const num = arr.filter((y) => y === x).length;
    newEntries.push([x, num]);
  });
  return Object.fromEntries(newEntries);
}

console.log(getFrequencies(['A', 'B', 'A', 'A', 'A']));

const getFrequencies = (arr) =>
  arr.reduce((map, item) => {
    map[item] = map[item] + 1 || 1;
    return map;
  }, {});
