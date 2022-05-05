function whichIsLarger(f, g) {
  if (f() === g()) {
    return 'neither';
  } else if (f() > g()) {
    return 'f';
  } else if (f() < g()) {
    return 'g';
  }
}

console.log(
  whichIsLarger(
    () => 505050,
    () => 5050
  )
);
