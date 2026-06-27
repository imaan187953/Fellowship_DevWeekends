# Iterators and Generators

Iterators and generators provide a way to work with sequences of data one value at a time instead of processing everything at once.

---

# What is an Iterator?

An iterator is an object that allows you to traverse through a collection (such as an array) one element at a time.

Every iterator has a `next()` method.

The `next()` method returns an object containing:

- `value` → the current item
- `done` → whether iteration has finished

### Example Output

```javascript
{ value: 10, done: false }
{ value: 20, done: false }
{ value: undefined, done: true }
```

---

# What is a Generator?

A generator is a special type of function that can pause and resume its execution.

Generators use:

- `function*`
- `yield`

Unlike normal functions, generators don't execute all at once. They return values one at a time whenever `next()` is called.

---

## Advantages

### Iterators

- Process data one item at a time.
- Useful for large collections.
- Control iteration manually.

### Generators

- Pause and resume execution.
- Save memory.
- Useful for lazy loading and asynchronous workflows.

---

## Key Differences

| Iterator | Generator |
|-----------|-----------|
| Uses `next()` | Uses `yield` |
| Manually created | Created using `function*` |
| Traverses data | Produces data |