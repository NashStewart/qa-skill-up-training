// Shared Utilities: a utility is a plain function that many tests can import,
// like checking a text format or converting a value. Unlike a fixture, it
// doesn't need a browser, a page, or any setup. It takes values in and gives
// a value back.

// Command to run this exercise: SITE=toolshop npx playwright test tests/architecture/05-shared-utilities.spec.ts

import { test, expect } from '@playwright/test';
import { isCurrencyFormat } from './utils/text-format';

test.describe('Shared Utilities', () => {
  test('first product price is in currency format', async ({ page }) => {
    await page.goto('/');

    const firstPrice = await page.locator('[data-test="product-price"]').first().innerText();

    expect(isCurrencyFormat(firstPrice)).toBe(true);
  });
});

// TODO: check that a price falls within a range.
//
// 1. In utils/text-format.ts, follow the TODO comment to add isPriceInRange.
//
// 2. Add a new test inside the describe block above that reads the first
//    product's price and uses isPriceInRange to assert it's between 1 and 1000.
//
// 3. In the same test, assert that isPriceInRange('$29.99', 30, 40) is false,
//    to prove your function can say no.
//
// 4. Run this exercise and confirm both tests pass.
