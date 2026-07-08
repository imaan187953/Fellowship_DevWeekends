# Conditional Rendering in React

## What is Conditional Rendering?

Conditional rendering means showing different UI elements based on a condition.

It works like JavaScript `if-else` statements.

---

## Using Ternary Operator

Syntax:

```jsx
condition ? trueValue : falseValue


# Example

function App(){

const isLoggedIn = true;

return (
  <div>
    {
      isLoggedIn ? 
      <h1>Welcome</h1> :
      <h1>Please Login</h1>
    }
  </div>
)

}