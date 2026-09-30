# Module 1: Framework Architecture

## What Is a Framework?

In Fundamentals, every test did everything itself: found its own elements, typed its own URLs, and logged in on its own. That's fine for a few tests. With hundreds, the same code gets copied everywhere, and one change to the site means fixing dozens of files.

A **test framework** is the structure around your tests that solves this. Shared pieces live in one place, tests reuse them, and when the site changes you update one file instead of every test.

## What You'll Build

Each module in this chapter adds one piece:

| Module | Piece | What It Does |
|---|---|---|
| 2. Browser Projects | `projects` in `playwright.config.ts` | Runs the same tests in more than one browser |
| 3. Page Object Model | `pages/` | Keeps each page's locators and actions in one class |
| 4. Fixtures | `fixtures.ts` | Hands tests ready-made helpers, like `loginAs()` |
| 5. Shared Utilities | `utils/` | Plain functions any test can import |
| 6. Environment Management | `ENV` in `playwright.config.ts` | Runs the same tests against different environments (i.e demo, staging, prod) |
| 7. Authentication | `auth.setup.ts` | Logs in once and reuses that login in other tests |
| 8. Test Tagging | tags like `@smoke` | Runs tests by purpose instead of by file (i.e. test suites) |

## How the Pieces Fit Together

A test can use three kinds of shared code:

| Piece | How a Test Uses It |
|---|---|
| Page object | Imports the class and creates it with the page: `const loginPage = new LoginPage(page);` then `await loginPage.login(email, password);` |
| Fixture | Asks for it by name in the test's parameters: `async ({ loginAs }) => { await loginAs('janeDoe'); }` |
| Utility | Imports the function and calls it: `expect(isCurrencyFormat(price)).toBe(true);` |

The pieces also build on each other:

- A **fixture** can use a **page object**: `loginAs()` uses `LoginPage` to do its work.
- A **page object** holds the **locators**, so tests never need to repeat them.
- A **utility** stands alone. It doesn't need a browser, so any test, fixture, or page object can use it.
- **Config** decides which browsers, which environment, and who's already logged in.
- **Tags** decide which tests run.

Because each piece has one job, you can change one without breaking the others.

## Before You Start

- Practice site: https://practicesoftwaretesting.com (Toolshop). Visit and explore the site first.
- Every command in this chapter starts with `SITE=toolshop`. Without it, Playwright looks in the Fundamentals folder and finds no tests.
