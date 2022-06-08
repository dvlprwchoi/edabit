function firstVowel(str) {
  const vowels = [`a`, `e`, `i`, `o`, `u`];
  str = str.toLowerCase();
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      return i;
    }
  }
}

const firstVowel = (str) => str.search(/[aeiou]/i);

console.log(firstVowel('pInEaPPLe'));
