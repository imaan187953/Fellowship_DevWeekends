# ES Modules and CommonJS

Modules allow JavaScript code to be split into multiple files, making projects easier to organize and maintain.

---

## What are ES Modules?

ES Modules (ESM) are the modern JavaScript module system. They use the `import` and `export` keywords.

### Export

```javascript
export const PI = 3.14159;
```

### Import

```javascript
import { PI } from "./math.js";
```

---

## What is CommonJS?

CommonJS is the traditional module system used in Node.js. It uses `require()` and `module.exports`.

### Export

```javascript
module.exports = add;
```

### Import

```javascript
const add = require("./math");
```

---

## ES Modules vs CommonJS

| Feature | ES Modules | CommonJS |
|---------|------------|-----------|
| Import | `import` | `require()` |
| Export | `export` | `module.exports` |
| Loading | Static | Dynamic |
| Browser Support | Yes |  No (without bundlers) |
| Node.js | Modern |  Traditional |

---

## Advantages of ES Modules

- Standard JavaScript module system.
- Better optimization.
- Cleaner syntax.
- Supported by modern browsers and Node.js.

---

## When to Use

- Use **ES Modules** for modern JavaScript projects.
- Use **CommonJS** when working with older Node.js projects.

---
ES Modules

math.js
   │
 export
   │
   ▼
app.js
 import

 ---
 CommonJS

math.js
   │
module.exports
   │
   ▼
index.js
require()