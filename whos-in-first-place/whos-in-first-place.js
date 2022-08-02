function firstPlace(road) {
  const roadArr = [...road];
  const uniqueValueArr = [...new Set(road)];
  if (roadArr.length === 0) {
    return 'No road available';
  } else if (uniqueValueArr == '=') {
    return 'No car available';
  } else {
    for (let i = roadArr.length - 1; i >= 0; i--) {
      if (roadArr[i] !== '=') {
        return roadArr[i];
      }
    }
  }
}

const firstPlace = (road) => {
  const r = [...road];
  if (!r.length) {
    return 'No road available';
  }
  return r.reverse().find((a) => a != '=') || 'No car available';
};

console.log(firstPlace('====='));
