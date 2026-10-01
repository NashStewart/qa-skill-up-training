# Module 3: Pushing

Target file: `exercises/git/bug-report.md`

**First Push**
  1. Run `git push -u origin <your-name>`.
  2. Run `git status` and confirm it says your branch is up to date with `origin/<your-name>`.

**Check It on GitHub**
  1. Open the repo on GitHub.
  2. Use the branch dropdown to switch to `<your-name>`.
  3. Open `exercises/git/bug-report.md` and confirm your changes from Module 2 are there.
  4. Open the commit history and confirm your two commits are listed.

**Push Another Commit**
  1. Replace the `TODO` under `## Environment` with the browser and operating system you use (for example, `Chrome on Windows 11`).
  2. Stage and commit the change with the message `"Add environment to bug report"`.
  3. Run `git status` and confirm it says your branch is ahead of `origin/<your-name>` by 1 commit.
  4. Run `git push`. You only need `-u origin <branch>` the first time.
  5. Refresh GitHub and confirm the new commit is there.

From now on, every exercise ends with a commit and a `git push`.
