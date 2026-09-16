---
name: new-feature
description: Build a feature on a branch and open a pull request. Use when the user asks for a new feature, a change that should go through a PR, or says "branch and PR".
---

# New feature, branch to PR

The full loop for one feature: branch, implement, test, push, PR.

1. Start clean: `git status` must be empty; if not, ask what to do with the pending changes.
2. Branch from main: `git switch main && git pull`, then `git switch -c feature/<short-name>`.
3. Implement the feature. If it is UI, use the `new-component` skill so the component and test conventions are followed.
4. Run `npm test`. Do not continue while anything is red.
5. Commit in logical units with descriptive messages, then `git push -u origin HEAD`.
6. Open the PR: `gh pr create --fill`; if the user mentioned an issue, put `Closes #<n>` in the body so it auto-closes on merge.
7. Print the PR URL and stop; merging is the user's call.
