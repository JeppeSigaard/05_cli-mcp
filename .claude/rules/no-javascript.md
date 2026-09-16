---
description: TypeScript only; fires when a .js or .jsx file is touched
paths: ["**/*.js", "**/*.jsx"]
---

# No JavaScript files

You are touching a `.js` or `.jsx` file. This project is TypeScript only.

- Never create new `.js` or `.jsx` files. Write `.ts` or `.tsx` instead.
- If you are editing an existing `.js`/`.jsx` file, propose converting it to TypeScript first.
- Config files are not an exception; Vite and Vitest read `.ts` configs here.
