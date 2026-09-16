---
name: setup-repo
description: Put this project on GitHub for the first time. Use when the user asks to set up the repo, publish to GitHub, or create a remote.
---

# Set up the GitHub repo

Take the project from a plain folder to a GitHub repository, using the `gh` CLI.

1. Run `gh auth status`. If not logged in, stop and ask the user to run `gh auth login` themselves.
2. If there is no `.git` folder yet: `git init -b main`.
3. Make sure `.gitignore` covers `node_modules` and `dist`, then stage and commit everything as `Initial commit`.
4. Create the remote and push in one step: `gh repo create <folder-name> --private --source . --push`. Ask before using a different name or `--public`.
5. Do not open a browser unless asked; print the repo URL from `gh repo view --json url` and stop there.
