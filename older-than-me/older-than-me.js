// class Person {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   compareAge(other) {
//     if (this.age == other.age) {
//       return `${other.name} is the same age as me.`;
//     } else if (this.age > other.age) {
//       return `${other.name} is younger than me.`;
//     } else if (this.age < other.age) {
//       return `${other.name} is older than me.`;
//     }
//   }
// }

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  compareAge(other) {
    let i = Math.sign(other.age - this.age),
      x = ['the same age as', 'older than'][i] || 'younger than';
    return `${other.name} is ${x} me.`;
  }
}

p1 = new Person('Samuel', 24);
p2 = new Person('Joel', 36);
p3 = new Person('Lily', 24);
console.log(p1.compareAge(p2));
