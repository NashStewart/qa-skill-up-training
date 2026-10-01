# Module 2: Commits

Target file for every step: `exercises/git/bug-report.md`

Make sure you're on your branch (`git branch`) before you start.

**First Commit**
  1. In `bug-report.md`, replace the `TODO` after `Reported by:` with your name.
  2. Save the file.
  3. Run `git status` and confirm `bug-report.md` is listed as modified.
  4. Run `git diff` to see the exact line you changed.
  5. Run `git add exercises/git/bug-report.md`.
  6. Run `git status` again and confirm the file is now listed under "Changes to be committed".
  7. Run `git commit -m "Add reporter name to bug report"`.

**Second Commit**
  1. Replace the `TODO` after `Severity:` with `Low`, `Medium`, or `High`.
  2. Replace the `TODO` under `## Expected Result` with one sentence describing what should happen when you click Log In.
  3. Save the file.
  4. Stage and commit both changes together with the message `"Add severity and expected result"`.

**Review Your History**
  1. Run `git log --oneline`.
  2. Confirm your two commits are at the top, above the commits that came from `main`.
  3. Run `git status` and confirm the working tree is clean.
