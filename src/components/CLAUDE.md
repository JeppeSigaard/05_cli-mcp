# Components

- One component per file, filename in PascalCase matching the component (`Hero.tsx` exports `Hero`).
- Props are typed with an `interface <Name>Props` right above the component.
- Components stay small and presentational; no data fetching in here.
- Class names come from `src/styles.css`; add new classes there, not inline styles.
- Every component has a matching test in `src/tests/`.
