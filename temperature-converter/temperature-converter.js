function convert(deg) {
  const degArr = deg.split('°');
  if (degArr.length === 1) {
    return 'Error';
  } else if (deg.endsWith('F')) {
    degArr[0] = Math.round((parseInt(degArr[0] - 32) * 5) / 9);
    degArr.pop();
    degArr.push('C');
    return degArr.join('°');
  } else if (deg.endsWith('C')) {
    degArr[0] = parseInt(Math.round(degArr[0] * 1.8 + 32));
    degArr.pop();
    degArr.push('F');
    return degArr.join('°');
  }
}

console.log(convert('16°C'));
