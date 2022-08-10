// function primeInRange(n1, n2) {
//   console.log(62 / 66);
//   for (let i = n1, sqrtNum = Math.sqrt(n2); i <= sqrtNum; i++) {
//     if (n1 % i === 0) {
//       return false;
//     }
//   }
// }

function isPrime(num) {
  let count = 2;
  while (count < num / 2 + 1) {
    if (num % count !== 0) {
      count++;
      continue;
    }
    return false;
  }
  return true;
}

// console.log(isPrime(10));

function primeInRange(n1, n2) {
  let count = 0;
  for (let i = n1; i <= n2; i++) {
    if (isPrime(i)) {
      count++;
    }
  }
  return count > 0;
}

console.log(primeInRange(10, 15));

function primeInRange(n1, n2) {
  function isPrime(n) {
    for (let i = 2; i < n; i++) {
      if (!(n % i)) return false;
    }
    return n > 1;
  }

  for (let j = n1; j <= n2; j++) {
    if (isPrime(j)) return true;
  }
  return false;
}
