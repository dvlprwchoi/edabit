function removeDups(arr) {
  return Array.from(new Set(arr));
}

const removeDups = (arr) => [...new Set(arr)];
