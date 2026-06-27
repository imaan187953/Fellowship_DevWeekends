# ES6+ Features

ES6 (ECMAScript 2015) introduced many features that make JavaScript cleaner, more readable, and easier to write. These features are now standard in modern JavaScript development.

---

## 1. Destructuring

Destructuring allows you to extract values from objects and arrays into separate variables.

### Example

```javascript
const user = {
  name: "Iman",
  age: 21
};

const { name, age } = user;
```

---

## 2. Spread Operator (...)

The spread operator expands elements of an array or object.

### Example

```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];
```

---

## 3. Rest Parameters (...)

Rest parameters collect multiple arguments into a single array.

### Example

```javascript
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
```

---

## 4. Optional Chaining (?.)

Optional chaining safely accesses nested properties without causing errors.

### Example

```javascript
console.log(user.address?.city);
```

---
