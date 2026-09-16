---
name: new-component
description: Create a new React component with its test. Use when the user asks for a new component, section, card, or UI block on the page.
---

# New component

Create a component and its test in one go, following this project's conventions.

1. Read `src/components/CLAUDE.md` and `src/tests/CLAUDE.md` so the conventions are fresh.
2. Create `src/components/<Name>.tsx`: PascalCase filename, named export, props typed with `interface <Name>Props`. Keep it small and presentational.
3. If it needs styling, define it with `stylex.create` at the top of the component file and apply it with `{...stylex.props(styles.x)}`. Take colors from `colors` in `src/tokens.stylex.ts` rather than hard-coding them. No inline styles, and no separate CSS file — `src/stylex.css` only holds the `@stylex;` entrypoint.
4. Create `src/tests/<Name>.test.tsx`: render it with Testing Library and assert on visible text or roles.
5. Run `npm test` and fix anything red.
6. Only wire the component into `App.tsx` if the user asked for it on the page; otherwise stop after the tests pass and say where the files landed.
