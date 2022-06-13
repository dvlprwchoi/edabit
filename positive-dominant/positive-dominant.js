function isPositiveDominant(a) {
  let pos = [];
  let neg = [];
  a.map((x) => {
    if (x > 0 && pos.includes(x) !== true) {
      pos.push(x);
    } else if (x < 0 && neg.includes(x) !== true) {
      neg.push(x);
    }
  });
  return pos.length > neg.length;
}

function isPositiveDominant(a) {
  const positives = new Set(a.filter((n) => n > 0));
  const negatives = new Set(a.filter((n) => n < 0));

  return positives.size > negatives.size;
}

console.log(isPositiveDominant([5, 99, 832, -3, -4]));
