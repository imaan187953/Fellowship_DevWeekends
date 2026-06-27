# Prototype Chain

## What is a Prototype?

In JavaScript, every object has a hidden link to another object called its **prototype**. When you try to access a property or method that doesn't exist on the current object, JavaScript automatically looks for it in the prototype object.

This process continues until the property is found or the end of the chain (`null`) is reached.

---

## Prototype Chain

```
dog
 │
 ▼
animal
 │
 ▼
Object.prototype
 │
 ▼
null
```

If a property isn't found in `dog`, JavaScript checks `animal`. If it's still not found, it checks `Object.prototype`. If the property doesn't exist there either, the search ends at `null`.

---

## Why is the Prototype Chain Useful?

- Allows objects to share methods.
- Saves memory by avoiding duplicate methods.
- Forms the basis of inheritance in JavaScript.

---

## Example

See `examples/prototype-chain.js`

---

## Key Points

- Every object has a prototype.
- Objects can inherit properties and methods.
- JavaScript searches up the prototype chain automatically.
- The chain ends at `null`.

---

## Mini Challenge

Create a `vehicle` object with a `start()` method.

Create a `car` object that inherits from `vehicle`.

Access the inherited `start()` method from `car`.