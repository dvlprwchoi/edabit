function isBoiling(temp) {
  const number = parseInt(temp.slice(0, -1));
  const last = temp.slice(-1);
  return (last === 'F' && number >= 212) || (last === 'C' && number >= 100);
}

console.log(isBoiling('212F'));
