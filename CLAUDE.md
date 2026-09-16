# Teach Claude

A small React landing page about teaching your AI agent. Built and extended live during the Claude Code course.

## Stack

- React 19 + TypeScript, built with Vite
- Tests: Vitest + Testing Library (jsdom)

## Structure

- `src/components/`: one component per file (see the CLAUDE.md in that folder)
- `src/tests/`: one test file per component (see the CLAUDE.md in that folder)

## Conventions

- TypeScript only. Never create `.js` or `.jsx` files (see `.claude/rules/no-javascript.md`).
- Named exports, no default exports.
- Styling uses StyleX: `stylex.create` in the component file, applied with `{...stylex.props(...)}`.
- Shared colors live in `src/tokens.stylex.ts` (`stylex.defineVars`); `src/stylex.css` holds only the `@stylex;` entrypoint.
- Every new component gets a test in the same change.

## Tools

- GitHub work goes through the `gh` CLI (see the `setup-repo` and `new-feature` skills), not a GitHub MCP server.
- For questions about library APIs or versions, use the Context7 MCP server so the answer comes from current docs, not training data.

## Working style

- Run `npm test` before saying a change is done.
- If a request is ambiguous, ask instead of guessing.
