// function moodToday(mood) {
//   if (mood == null) {
//     return `Today, I am feeling neutral`;
//   } else return `Today, I am feeling ${mood}`;
// }

function moodToday(mood) {
  if (!arguments.length) {
    return `Today, I am feeling neutral`;
  } else return `Today, I am feeling ${mood}`;
}

console.log(moodToday());
