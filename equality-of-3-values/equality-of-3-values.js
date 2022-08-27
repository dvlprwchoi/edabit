function equal(a, b, c) {
  const uniqueValue = new Set(arguments);
  return uniqueValue.size === 3 ? 0 : uniqueValue.size === 2 ? 2 : 3;
}

function equal(a, b, c) {
  let unique = new Set(arguments).size;
  switch (unique) {
    case 1:
      return 3;
    case 2:
      return 2;
    case 3:
      return 0;
  }
}

console.log(equal(3, 4, 3));
