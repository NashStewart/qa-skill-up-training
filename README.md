# QA Skill-Up Training

This repo is where you'll do the hands-on exercises for the Skill-Up program. Each subsection of the curriculum has a JIRA ticket with a video and some documentation to read (MDN, etc.) — once you've gone through those, you come here and work through that subsection's exercise.

## Setup & Installation

**Prerequisites:** Node.js 18+ and npm (already installed if you can run `node --version` and `npm --version` in your terminal).

1. Clone this repo.
2. Install dependencies:
   ```
   npm install
   ```
3. Create your own branch off `main` (see [Git Workflow](#git-workflow) below) — you'll do this once, before your first exercise.

### Playwright Setup (later section)

You don't need to do anything here yet. When the training reaches the Playwright section, this section will be updated with the install steps (`npm install -D @playwright/test` and `npx playwright install`). For now, this repo only needs Node and TypeScript.

## How This Training Works

For each subsection:

1. **Watch the video and read the documentation** linked on that subsection's JIRA ticket.
2. **Come to this repo** and open the matching exercise file.
3. **Follow the TODO comment(s)** in that file — read them, then edit the file to do what they ask.
4. **Run the file** to see your own code work. There's no pass/fail check — the point is to see the output and confirm it makes sense to you, not to pass a grader. Playing around with the code to see how it works is encouraged.
5. **Commit and push** your change to your own branch.

### Branch policy

You have **one branch that's yours for the whole training** — created once from `main`, at the very start. Every exercise you complete is a commit on that same branch, pushed up as you go.

- You will never merge your branch into `main`. `main` stays exactly as it is right now for every trainee — it's the clean starting point, not something that accumulates everyone's work.
