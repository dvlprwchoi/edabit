class Player {
  constructor(name, age, height, weight) {
    // complete function
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  getAge() {
    // complete function
    return `${this.name} is age ${this.age}`;
  }

  getHeight() {
    // complete function
    return `${this.name} is ${this.height}cm`;
  }

  getWeight() {
    // complete function
    return `${this.name} weighs ${this.weight}kg`;
  }
}

const p1 = new Player('David Jones', 25, 175, 75);
console.log(p1.getHeight());
