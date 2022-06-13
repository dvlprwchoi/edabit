function sortDescending(num) {
  return Number(
    String(num)
      .split('')
      .sort((a, b) => b - a)
      .join('')
  );
}

console.log(sortDescending(73065));
