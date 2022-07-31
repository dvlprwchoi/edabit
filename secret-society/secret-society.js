function societyName(friends) {
  return friends
    .map((x) => x[0])
    .sort()
    .join('');
}

console.log(societyName(['Adam', 'Sarah', 'Malcolm']));
