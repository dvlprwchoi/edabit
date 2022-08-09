function charIndex(word, char) {
  const wordArr = word.split('');
  const filtered = wordArr.filter((x) => x === char);
  const firstIndex = wordArr.indexOf(char);
  const lastIndex = wordArr.lastIndexOf(char);
  while (firstIndex !== -1) {
    if (filtered.length === 1) {
      return [firstIndex, firstIndex];
    } else {
      return [firstIndex, lastIndex];
    }
  }
  return undefined;
}

const charIndex = (word, char) =>
  word.includes(char)
    ? [word.indexOf(char), word.lastIndexOf(char)]
    : undefined;

console.log(charIndex('circumlocution', 'c'));
