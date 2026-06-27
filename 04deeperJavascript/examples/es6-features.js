// ================================
// DESTRUCTURING
// ================================

const student = {
  name: "Iman",
  age: 21,
  course: "Computer Science"
};

const { name, age, course } = student;

console.log("Destructuring:");
console.log(name);
console.log(age);
console.log(course);

// ================================
// ARRAY DESTRUCTURING
// ================================

const colors = ["Red", "Green", "Blue"];

const [first, second] = colors;

console.log("\nArray Destructuring:");
console.log(first);
console.log(second);

// ================================
// SPREAD OPERATOR
// ================================

const marks = [78, 82, 90];

const updatedMarks = [...marks, 95];

console.log("\nSpread Operator:");
console.log(updatedMarks);

// ================================
// OBJECT SPREAD
// ================================

const person = {
  name: "Ali",
  age: 22
};

const updatedPerson = {
  ...person,
  city: "Lahore"
};

console.log(updatedPerson);

// ================================
// REST PARAMETERS
// ================================

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log("\nRest Parameters:");
console.log(sum(10, 20));
console.log(sum(10, 20, 30, 40));

// ================================
// OPTIONAL CHAINING
// ================================

const employee = {
  name: "Sara",
  address: {
    city: "Islamabad"
  }
};

console.log("\nOptional Chaining:");
console.log(employee.address?.city);
console.log(employee.contact?.phone);

// ================================
// TEMPLATE LITERALS (Bonus)
// ================================

console.log(`\nHello, ${name}! Welcome to ES6.`);

// ================================
// ARROW FUNCTION (Bonus)
// ================================

const multiply = (a, b) => a * b;

console.log("\nArrow Function:");
console.log(multiply(5, 6));