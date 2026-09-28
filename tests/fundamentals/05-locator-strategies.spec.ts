// Locator Strategies: Playwright offers several ways to find an element —
// by its accessibility role, its visible text, or a raw CSS/XPath selector
// via locator(). The same element can often be found more than one way.

// Command to run this exercise: npx playwright test tests/fundamentals/05-locator-strategies.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Locator Strategies', () => {
  test('getByRole finds the Dropdowns link', async ({ page }) => {
    await page.goto('/');
    await expect(page.getByRole('link', { name: 'Dropdowns' })).toBeVisible();
  });

  test('getByText finds the blog heading', async ({ page }) => {
    await page.goto('/blog');
    await expect(page.getByText('Automation testing, written down')).toBeVisible();
  });

  test('locator() with a CSS selector finds the Movie Name input', async ({ page }) => {
    await page.goto('/practice/input-fields');
    await expect(page.locator('#movieNameInput')).toBeVisible();
  });

  test('locator() with an XPath selector finds the Select Last button', async ({ page }) => {
    await page.goto('/practice/dropdowns');
    await expect(page.locator("xpath=//button[@aria-label='Select last programming language']")).toBeVisible();
  });

  // TODO: the same four elements above can each be found a different way.
  // Add four new tests below that locate the elements in different ways like this:
  //
  // 1. The Dropdowns link — this time with a CSS selector:
  //      page.locator('a[href="/practice/dropdowns"]')
  //
  // 2. The blog heading — this time with an XPath selector:
  //      page.locator("xpath=//main[@id='main-content']/div/section/header/h1")
  //
  // 3. The Movie Name input — this time with getByRole:
  //      page.getByRole('textbox', { name: 'Movie name' })
  //
  // 4. The Select Last button — this time with getByText. Note: plain
  //    getByText('Select Last') would also match several other elements
  //    on this page (Playwright's text match is substring-based by default),
  //    so use { exact: true } to match only the button:
  //      page.getByText('Select Last', { exact: true })
});
