function getVodkaBottle(obj, num) {
  let indexArr = [];
  const keyArr = Object.keys(obj);
  const valueArr = Object.values(obj);

  for (let i = 0; i < keyArr.length; i++) {
    if (keyArr[i].includes('Rammstein')) {
      indexArr.push(i);
    }
  }

  for (i in indexArr) {
    if (valueArr[indexArr[i]] === num) {
      return keyArr[indexArr[i]];
    }
  }
}

function getVodkaBottle(obj, num) {
  for (const [key, value] of Object.entries(obj)) {
    if (value === num && key.startsWith('R')) return key;
  }
}

const getVodkaBottle = (obj, num) =>
  Object.keys(obj).find((key) => key.includes('Rammstein') && obj[key] === num);

console.log(
  getVodkaBottle({ whiskey: 100, 'Rammstein A': 100, 'Rammstein B': 50 }, 100)
);
