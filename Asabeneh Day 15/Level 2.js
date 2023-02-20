//Question 1:Override the method you create in Animal class
console.log("\n");
class NewDog extends Animal {
  constructor(name, age, color, legs, gender) {
    super(name, age, color, legs);
    this.gender = gender;
  }
  getAnimalDetails() {
    const details = `its name is ${this.name}: a ${this.gender} dog, it has ${this.color} eyes, ${this.legs} legs and its ${this.age} years old `;
    return details;
  }
}
let dog1 = new NewDog("Bingo", "2", "brown", 4, "male");
console.log(dog1);
console.log(dog1.getAnimalDetails());