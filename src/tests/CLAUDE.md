# Tests

- One file per component, named `<Component>.test.tsx`.
- Use Testing Library: query by role or visible text, the way a user sees the page.
- Test behavior and content, not markup details (no snapshot tests, no class name assertions).
- Keep each test file short: the happy path plus at most one edge case.
