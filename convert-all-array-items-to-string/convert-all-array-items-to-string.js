function parseArray(arr) {
  if (arr.length !== 0) {
    return arr.map((x) => x.toString());
  } else return [];
}

function parseArray(arr) {
  return arr.map((m) => m + '');
}
