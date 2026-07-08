
---

### `ListRendering.md`

```md
# List Rendering in React

## What is List Rendering?

List rendering means displaying multiple elements from an array.

React uses the JavaScript `.map()` method to render lists.

---

## Rendering Lists

Example:

```jsx
const fruits = ["Apple", "Banana", "Orange"];

function App(){

return (
  <ul>
    {
      fruits.map((fruit)=>(
        <li>{fruit}</li>
      ))
    }
  </ul>
)

}