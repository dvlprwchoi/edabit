function checkTitle(title) {
  title = title.split(' ');
  const trueFalseArr = title.map((str) => {
    if (str[0] !== str[0].toUpperCase()) {
      return false;
    } else return true;
  });
  return trueFalseArr.includes(false) ? false : true;
}

console.log(checkTitle('A Simple Java Script Program!'));
