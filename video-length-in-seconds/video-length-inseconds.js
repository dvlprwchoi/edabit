function minutesToSeconds(time) {
  const [min, sec] = time.split(':');
  return parseInt(sec) >= 60 ? false : parseInt(min) * 60 + parseInt(sec);
}

const minutesToSeconds = (time) => {
  const [minutes, seconds] = time.split(':').map(Number);
  return seconds > 59 ? false : seconds + minutes * 60;
};
console.log(minutesToSeconds('13:56'));
