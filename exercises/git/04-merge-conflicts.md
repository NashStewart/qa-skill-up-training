# Module 4: Merge Conflicts

**Scenario** 
While you've been working on your branch, the team has been pushing updates to `main`, including changes to the same bug report you edited. You need to bring those updates into your branch.

For this exercise, `fake-main-branch` plays the role of `main`. Treat it as if it were the real `main` branch.

Target file: `exercises/git/bug-report.md`

**Get the Latest Main**
  1. Run `git status` and confirm your working tree is clean.
  2. Run `git fetch origin`.
  3. Run `git branch -r` and confirm `origin/fake-main-branch` is listed.

**Merge Main Into Your Branch**
  1. Run `git merge origin/fake-main-branch`.
  2. Read the output and find the `CONFLICT` line for `bug-report.md`.
  3. Run `git status` and confirm `bug-report.md` is listed under "Unmerged paths".

**Resolve the Conflicts**
  1. Open `bug-report.md` and find each block that starts with `<<<<<<<` and ends with `>>>>>>>`.
     1. The top half (`HEAD`) is your branch.
     2. The bottom half (`origin/fake-main-branch`) is what the team pushed to main.
  2. Resolve the block at the top of the file using lines from both sides:
     1. Keep your `Reported by:` line.
     2. Keep main's `Severity:` line. The team retested and found the bug blocks every user.
     3. Keep main's `Status:` line.
  3. For `## Expected Result`, keep both sentences: yours first, then main's.
  4. Delete every `<<<<<<<`, `=======`, and `>>>>>>>` line.
  5. Search the file for `<<<<<<<` and confirm nothing is left.
  6. Save the file.

**Finish the Merge**
  1. Run `git add exercises/git/bug-report.md`.
  2. Run `git commit --no-edit` to commit with Git's default merge message.
  3. Run `git log --oneline --graph` and find the merge commit joining main's history and yours.
  4. Run `git push`.

**Check What Merged Cleanly**
  1. Look at the `## Actual Result` section.
  2. Confirm the sentence the team added on 'main' (fake-main-branch) is there. 
     Git merged it on its own because you never changed that section.
