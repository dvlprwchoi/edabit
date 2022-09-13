function aveSpd(upTime, upSpd, downSpd) {
  const distance = upTime * (upSpd / 60);
  const downTime = distance / (downSpd / 60);
  return ((2 * distance) / (upTime + downTime)) * 60;
}

console.log(aveSpd(18, 20, 60));
