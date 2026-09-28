# Module 12: Trace Viewer

Target file for every step: `tests/fundamentals/account-setup-form.spec.ts`

**Recording a Trace**
  1. Run `npx playwright test tests/fundamentals/account-setup-form.spec.ts --trace on`.
  2. It passes — a trace records regardless of pass/fail.

**Opening the Trace**
  1. Run `npx playwright show-report`.
  2. Click the trace icon next to the test to open the Trace Viewer.

  > **Troubleshooting:** If you see *"The trace was created by a newer version of Playwright"*, your browser cached an older Trace Viewer from another Playwright project on the same port. Open the report in an incognito window, or run `npx playwright show-trace <path-to-trace.zip>` instead.

**Actions & Snapshots**
  1. Click through the Actions list on the left, one per Playwright call.
  2. For each, compare the Before/During/After snapshots — notice the real mismatch error appear in the snapshot right after the first Submit click.

**Source, Call, and Log**
  1. With an action selected (on the left panel), check the Source tab (bottom panel) — it highlights the exact test line that produced it.
  2. Check the Call tab for that action's locator and timing.
  3. Check the Log tab for the full step-by-step activity Playwright recorded for it.

**Timeline Filtering**
  1. Drag across a range of the timeline (top) (or double-click an action).
  2. Notice the Console and Network tabs filter to just that window of time. This fixture barely uses either, so don't expect much there — the filtering behavior is the point.

**Errors**
  1. Temporarily break the fix step (change the second `confirmPassword` fill back to a mismatched value) so the resubmit still fails.
  2. Run again with `--trace on`, then open the new trace.
  3. Click the Errors tab — it jumps straight to the failing assertion with a timeline marker.
  4. Revert the fix step back to the matching value.

**Shut Down the Server**
  - `Ctrl+C` in the same terminal that you ran the test.
