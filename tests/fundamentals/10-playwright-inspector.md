# Module 11: Playwright Inspector

Target file for every step: `tests/fundamentals/account-setup-form.spec.ts`

**Run in Debug Mode**
  1. Run `npx playwright test tests/fundamentals/account-setup-form.spec.ts --debug` in the terminal.
  2. Two windows open: a real browser and the Playwright Inspector.

**Stepping Through the Test**
  1. Use the Inspector's toolbar to step through each action one at a time.
  2. Watch the browser update as each fill, check, and click happens.

**Run From a Breakpoint**
  1. Add `await page.pause();` directly above the first Submit click line.
  2. Run `npx playwright test tests/fundamentals/account-setup-form.spec.ts --project chromium --headed` — no `--debug` flag needed, but `page.pause()` is ignored in headless mode.
  3. Confirm execution stops right there.
  4. Remove the `page.pause();` line when done.

**Picking and Live-Editing Locators**
  1. In the Inspector, click Pick locator.
  2. Hover over the Password field in the browser to see it selected.
  3. Edit the locator directly in the Inspector's field and watch the match update live.

**Actionability Logs**
  1. Step to the line that clicks Submit for the first time.
  2. Open the Inspector's log panel.
  3. Read through the visibility/enabled/stable checks Playwright ran before performing the click.

**Debugging a Specific Browser**
  1. Run `npx playwright test tests/fundamentals/account-setup-form.spec.ts --project webkit --debug` in the terminal.
  2. Confirm the Inspector opens against WebKit instead of Chromium this time.
  3. Compare this to Module 10's project checkboxes — same idea, different entry point: a CLI flag instead of a sidebar toggle.
