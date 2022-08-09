function findBrokenKeys(str1, str2) {
  const str1Arr = str1.split('');
  const str2Arr = str2.split('');
  let difference = [];
  for (let i = 0; i < str1Arr.length; i++) {
    if (str1Arr[i] !== str2Arr[i]) {
      difference.push(str1Arr[i]);
    }
  }
  return [...new Set(difference)];
}

console.log(findBrokenKeys('beethoven', 'affthoif5'));
// ["b", "e", "v", "n"])
