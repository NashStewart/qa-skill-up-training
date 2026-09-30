// Page Object Model (POM): a page object is a class that holds one page's
// locators and actions in a single place. Tests call its methods instead of
// repeating raw locators, so when the page changes, you update one class
// instead of every test that touches that page.

// Command to run this exercise: SITE=toolshop npx playwright test tests/architecture/03-page-object-model.spec.ts

import { test, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('Page Object Model', () => {
  // Without a page object: every locator is written out inside the test.
  test('logs in with raw locators', async ({ page }) => {
    await page.goto('/auth/login');
    await page.getByRole('textbox', { name: 'Email address' }).fill('customer@practicesoftwaretesting.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('welcome01');
    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL('/account');
  });

  // With a page object: the same flow, reading like the steps a tester
  // would describe. Open pages/login-page.ts to see where the locators went.
  test('logs in with a page object', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.goto();
    await loginPage.login('customer@practicesoftwaretesting.com', 'welcome01');

    await expect(page).toHaveURL('/account');
  });
});

// TODO: build a page object for the Toolshop homepage search, modeled on
// pages/login-page.ts.
//
// 1. Create pages/search-page.ts with a `SearchPage` class that has:
//      - locators for the search box, the Search button, and the product
//        names in the results
//      - a goto() method for the homepage
//      - a search(term: string) method that fills the box and clicks Search
//
// 2. Add a new test inside the describe block above that uses SearchPage to
//    search for 'pliers' and asserts the results contain 'Long Nose Pliers'.
//
// 3. Run this exercise and confirm all three tests pass.
