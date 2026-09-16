# Components

- One component per file, filename in PascalCase matching the component (`Hero.tsx` exports `Hero`).
- Props are typed with an `interface <Name>Props` right above the component.
- Components stay small and presentational; no data fetching in here.
- Styles are defined with `stylex.create` at the top of the component file and applied with
  `{...stylex.props(styles.x)}`; reuse colors from `src/tokens.stylex.ts` rather than hard-coding them.
- Every component has a matching test in `src/tests/`.
