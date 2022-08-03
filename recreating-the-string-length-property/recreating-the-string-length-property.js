function length(s) {
  let length = 0;
  for (let i = 0; i < s.length; i++) {
    length++;
  }
  return length;
}

function length(s) {
  let count = 0;
  for (let c of s) {
    count++;
  }
  return count;
}

function length(s) {
  return s.lastIndexOf('');
}
