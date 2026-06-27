// ================================
// PROTOTYPE CHAIN EXAMPLE
// ================================

// Parent object
const animal = {
  type: "Animal",

  eat() {
    console.log("Eating...");
  }
};

// Create a new object that inherits from animal
const dog = Object.create(animal);

// Add properties specific to dog
dog.name = "Buddy";
dog.breed = "Golden Retriever";

console.log("Dog Name:", dog.name);
console.log("Breed:", dog.breed);

// 'type' doesn't exist inside dog,
// so JavaScript looks in animal.
console.log("Type:", dog.type);

// 'eat()' is also inherited.
dog.eat();

console.log("\nPrototype of dog:");
console.log(Object.getPrototypeOf(dog));

console.log("\nDoes dog have its own 'type' property?");
console.log(dog.hasOwnProperty("type")); // false

console.log("\nDoes dog have its own 'name' property?");
console.log(dog.hasOwnProperty("name")); // true