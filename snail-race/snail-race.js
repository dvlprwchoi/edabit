function mauriceWins(mSnails, sSnails) {
  return (
    mSnails[0] < sSnails[2] &&
    mSnails[1] > sSnails[0] &&
    mSnails[2] > sSnails[1]
  );
}
