// ================================
// GENERATOR EXAMPLE
// ================================

function* numberGenerator() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = numberGenerator();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

// Expected Output:
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: undefined, done: true }

// ================================
// INFINITE ID GENERATOR
// ================================

function* generateId() {
  let id = 1;

  while (true) {
    yield id++;
  }
}

const ids = generateId();

console.log("\nGenerated IDs:");
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);