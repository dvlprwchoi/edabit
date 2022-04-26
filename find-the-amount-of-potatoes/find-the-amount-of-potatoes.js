// function potatoes(str) {
//   return str.split('potato').length - 1;
// }

const potatoes = (s) => s.match(/potato/g).length;

console.log(potatoes('potatopotatopotato'));
