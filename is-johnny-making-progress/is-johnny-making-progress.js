function progressDays(runs) {
  let count = 0;
  for (let i = 0; i < runs.length - 1; i++) {
    if (runs[i] < runs[i + 1]) {
      count++;
    }
  }
  return count;
}

function progressDays(runs) {
  return runs.filter((run, i) => runs[i + 1] > run).length;
}

console.log(progressDays([10, 11, 12, 9, 10]));
