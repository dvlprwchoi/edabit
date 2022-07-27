function zipIt(women, men) {
  let newArr = [];
  if (women.length !== men.length) {
    return "sizes don't match";
  } else {
    for (let i = 0; i < women.length; i++) {
      newArr.push([women[i]]);
      newArr[i].push(men[i]);
    }
  }
  return newArr;
}

const zipIt = (women, men) => {
  if (women.length === men.length) {
    return women.map((woman, i) => [woman, men[i]]);
  }
  return `sizes don't match`;
};

console.log(zipIt(['Ana', 'Amy', 'Lisa'], ['Bob', 'Josh', 'Tim']));
