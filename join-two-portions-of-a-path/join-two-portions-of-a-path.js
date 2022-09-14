function joinPath(portion1, portion2) {
  const newPortion1 = portion1.replace('/', '');
  const newPortion2 = portion2.replace('/', '');
  return newPortion1 + '/' + newPortion2;
}

console.log(joinPath('portion1/', 'portion2'));
