function isTriangle(a, b, c) {
  return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(21, 4, 25));
