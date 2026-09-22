// Async/Await & Promises: an `async` function can pause execution at an
// `await` expression until the awaited Promise resolves.

// Command to run this exercise: npm run typescript:async

const fakeApiCall = (endpoint: string): Promise<string> =>
  new Promise((resolve) => {
    setTimeout(() => resolve(`200 OK from ${endpoint}`), 500);
  });

const main = async () => {
  console.log('Sending request...');
  const response = await fakeApiCall('/login');
  console.log(response);
};

main();

// TODO: call `fakeApiCall('/logout')` again below, but this time without
// `await`, and log the result directly. Compare it to the response logged
// above — you'll get a Promise object instead of the actual string.

// In a real Playwright test, forgetting `await` on an action (like a click)
// usually shows up on the *next* line as an "element not found" or timeout
// error — not because that step is broken, but because the click never got
// a chance to actually happen before the test moved on. For example: click
// a button without `await`, then assert a modal is visible — the assertion
// runs before the click has fired, so it's looking for something that isn't
// there yet. Sometimes it's worse than a clear error: Playwright's built-in
// assertions auto-retry, so a missing await can produce a flaky test that
// passes some runs and fails others, instead of failing the same way
// every time.
