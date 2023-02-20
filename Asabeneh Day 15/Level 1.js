
    //Question 1:Create an Animal class. The class will have name, age, color, legs properties and create different methods
    class Animal {
    constructor(name, age, color, legs) {
      this.name = name;
      this.age = age;
      this.color = color;
      this.legs = legs;
    }
    getAnimalDetails() {
      const details = `its name is ${this.name}, it has ${this.color} eyes, ${this.legs} legs and its ${this.age} years old `;
      return details;
    }
  }
    //Question 2: Create a Dog and Cat child class from the Animal Class.
     class Dog extends Animal {}
  class Cat extends Animal {}
  let dog = new Dog("Bingo", "2", "brown", 4);
  console.log(dog);
  
  let cat = new Cat("Kitty", "2", "black", 4);
  console.log(cat);
  console.log(dog.getAnimalDetails());
  
