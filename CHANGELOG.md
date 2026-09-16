# 05 CLI and MCP

## New since 04
- `.claude/skills/setup-repo/SKILL.md`: takes the folder to a private GitHub repo with the `gh` CLI (auth check, init, commit, `gh repo create --push`).
- `.claude/skills/new-feature/SKILL.md`: the branch-to-PR loop; reuses the `new-component` skill from chapter 4 for UI work.
- `.mcp.json`: one MCP server, Context7 (live library docs). Optional; everything else works without it. Note the trade-off from the slides: the `gh` CLI costs 0 tokens up front; an MCP server announces itself at session start (with tool search, the default, only tool names load up front and full definitions enter context when a tool is used).
- `CLAUDE.md`: a new Tools section saying GitHub goes through `gh`, docs questions go through Context7.

Prerequisite: `gh` installed and `gh auth login` done (chapter 1 installation covered this).

## Try it in Claude Code
- `/setup-repo` (watch which git and gh commands Claude actually runs; this folder ships without .git on purpose)
- `/new-feature add a call-to-action banner` (branch, component + test via chapter 4's skill, push, PR; read the PR back on github.com)
- `/mcp` (see Context7 connected; then ask "what's new in React 19?" and watch the docs lookup)
- Ask: "Why do we use the gh CLI instead of the GitHub MCP server?" (it answers from CLAUDE.md; good class discussion starter)
