import { test as setup, expect } from '@playwright/test';

const authFile = 'playwright/.auth/jane.json';

// Runs once, before the tests of every project that depends on 'setup'.
// It logs in through the API instead of the login form (much faster), then
// saves the browser's logged-in state to a file that tests can reuse.
setup('log in as Jane Doe through the API', async ({ request, page }) => {
  const response = await request.post('https://api.practicesoftwaretesting.com/users/login', {
    data: { email: 'customer@practicesoftwaretesting.com', password: 'welcome01' },
  });
  expect(response.ok()).toBe(true);

  const body = await response.json();
  const token = body.access_token;

  // The site keeps the login token in localStorage under 'auth-token'.
  await page.goto('/');
  await page.evaluate((value) => localStorage.setItem('auth-token', value), token);

  await page.context().storageState({ path: authFile });
});
