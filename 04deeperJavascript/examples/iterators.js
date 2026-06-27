// ================================
// ITERATOR EXAMPLE
// ================================

const fruits = ["Apple", "Banana", "Orange"];

// Get the iterator
const iterator = fruits[Symbol.iterator]();

console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

// Expected Output:
// { value: 'Apple', done: false }
// { value: 'Banana', done: false }
// { value: 'Orange', done: false }
// { value: undefined, done: true }