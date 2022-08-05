function interview(arr, tot) {
  if (
    arr.length !== 8 ||
    tot > 120 ||
    arr[0] > 5 ||
    arr[1] > 5 ||
    arr[2] > 10 ||
    arr[3] > 10 ||
    arr[4] > 15 ||
    arr[5] > 15 ||
    arr[6] > 20 ||
    arr[7] > 20
  ) {
    return 'disqualified';
  } else {
    return 'qualified';
  }
}

function interview(arr, tot) {
  const benchmark = [5, 5, 10, 10, 15, 15, 20, 20, 120];
  const performance = [...arr, tot];
  return performance.every((x, i) => x <= benchmark[i])
    ? 'qualified'
    : 'disqualified';
}
