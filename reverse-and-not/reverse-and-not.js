function reverseAndNot(i) {
  return Number(String(i).split('').reverse().join('') + String(i));
}

console.log(reverseAndNot(152));
