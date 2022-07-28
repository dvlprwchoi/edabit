function countDs(sentence) {
  return sentence
    .toLowerCase()
    .split('')
    .filter((x) => x === 'd').length;
}

function countDs(sentence) {
  return [...sentence].filter((x) => x == 'd' || x == 'D').length;
}
