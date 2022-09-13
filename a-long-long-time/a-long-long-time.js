function longestTime(h, m, s) {
  const arr = [h, m, s];
  const arrSec = [h * 3600, m * 60, s];
  return arr[arrSec.indexOf(Math.max(...arrSec))];
}

console.log(longestTime(15, 955, 59400));
