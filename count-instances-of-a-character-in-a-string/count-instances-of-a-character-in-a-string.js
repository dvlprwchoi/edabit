function charCount(myChar, str) {
  let strInArr = str.split('');
  let num = 0;
  for (let i = 0; i < strInArr.length; i++) {
    if (myChar === strInArr[i]) {
      num += 1;
    }
  }
  return num;
}

console.log(charCount('a', 'edabit'));
