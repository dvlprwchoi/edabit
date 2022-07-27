function emotify(str) {
  const wordEmoticon = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P',
  };
  const strArr = str.split(' ');
  const word = strArr[2];
  const emoticon = wordEmoticon[word];

  return str.replace(word, emoticon);
}

function emotify(str) {
  let [first, mid, last] = str.split(' ');

  let emotify = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P',
  };

  return `Make me ${emotify[last]}`;
}

function emotify(str) {
  let obj = {
    smile: ':D',
    grin: ':)',
    sad: ':(',
    mad: ':P',
  };
  for (let k in obj) {
    if (str.endsWith(k)) return `Make me ${obj[k]}`;
  }
}

console.log(emotify('Make me smile'));
