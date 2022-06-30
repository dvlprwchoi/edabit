// function greetingMaker() {
//     function closure(name) {
//       return salutation +', '+ name;
//     }

function greetingMaker(salutation) {
  function closure(name) {
    return salutation + ', ' + name;
  }
  return closure;
}
