# Module 1: Branches

You'll create the branch you use for the rest of the training. Never work on `main`.

**Check Where You Are**
  1. Open a terminal in the repo folder.
  2. Run `git branch` and confirm the `*` is next to `main`.
  3. Run `git status` and confirm it says `nothing to commit, working tree clean`.

**Create Your Branch**
  1. Run `git switch -c <your-name>` (for example, `alex-smith`).
  2. Run `git branch` again and confirm the `*` is now next to your branch.

**Switch Between Branches**
  1. Run `git switch main`.
  2. Run `git branch` and confirm you're back on `main`.
  3. Run `git switch <your-name>` to return to your branch.
  4. Run `git branch` one more time and confirm you're on your branch.

From here on, every exercise is done on branch: `<your-name>`. If you're ever unsure, run `git branch` before you start.
