function makeTitle(str) {
  return str
    .split(' ')
    .map((x) => x[0].toUpperCase() + x.slice(1))
    .join(' ');
}
