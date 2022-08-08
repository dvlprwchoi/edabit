function damage(damage, speed, time) {
  while (damage > 0 && speed > 0) {
    if (time === 'second') {
      return damage * speed;
    } else if (time === 'minute') {
      return damage * speed * 60;
    } else if (time === 'hour') {
      return damage * speed * 3600;
    }
  }
  return 'invalid';
}

function damage(damage, speed, time) {
  if (damage < 0 || speed < 0) return 'invalid';
  return damage * speed * { second: 1, minute: 60, hour: 3600 }[time];
}
