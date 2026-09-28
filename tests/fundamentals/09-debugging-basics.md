# Module 10: Debugging Basics (VS Code Debugger)

Target file for every step: `tests/fundamentals/account-setup-form.spec.ts`

**Breakpoint + Debug Mode**
  1. Set a breakpoint on the first Submit click line (the one that triggers the mismatch).
  2. In the Test Explorer, right-click the test and select Debug Test.
  3. Step through the test using the debug toolbar.

**Live Debugging**
  1. While paused, click the `checkbox-terms` locator in the source code.
  2. Watch it highlight live in the browser.
  3. Edit the locator, watch the highlight move, then change it back.

**Picking a Locator**
  1. Open the Playwright sidebar and click Pick locator.
  2. Click the Password field in the browser.
  3. Compare the generated selector to the one already in the file.

**Chrome DevTools**
  1. In the Playwright sidebar, enable Show Browser.
  2. Run the test (not Debug).
  3. Press F12 in the reused browser window to open DevTools.

**Different Browsers**
  1. Open the Playwright sidebar and find the project checkboxes.
  2. Check a different project (e.g. WebKit) and debug the test again.
  3. Confirm it runs the same way — the test itself doesn't change per browser.

**Error Messages**
  1. Change the expected error text `'Passwords do not match.'` to something wrong, like `'Passwords match.'`.
  2. Run the test normally.
  3. Read the inline error — VS Code shows the expected vs. received text right there.
  4. Revert the text back to `'Passwords do not match.'`.
