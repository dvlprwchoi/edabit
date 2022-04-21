// function error(n) {
//   const errorMessage = [
//     'Check the fan: e1',
//     'Emergency stop: e2',
//     'Pump Error: e3',
//     'c: e4',
//     'Temperature Sensor Error: e5',
//     101,
//   ];
//   return 0 < n && n <= 5 ? errorMessage[n - 1] : errorMessage[5];
// }

function error(n) {
  let obj = {
    1: 'Check the fan: e1',
    2: 'Emergency stop: e2',
    3: 'Pump Error: e3',
    4: 'c: e4',
    5: 'Temperature Sensor Error: e5',
  };

  return obj[n] || 101;
}

console.log(error(1));
