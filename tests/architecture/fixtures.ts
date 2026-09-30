import { test as base, expect } from '@playwright/test';
import { LoginPage } from './pages/login-page';

const users = {
  janeDoe: { email: 'customer@practicesoftwaretesting.com', password: 'welcome01' },
  jackHowe: { email: 'customer2@practicesoftwaretesting.com', password: 'welcome01' },
};

type Fixtures = {
  loginAs: (user: keyof typeof users) => Promise<void>;
  // TODO: add a `login` entry that takes an email and a password.
};

export const test = base.extend<Fixtures>({
  // This fixture hands the test a function instead of an object. The test
  // decides when to call it, and it uses the LoginPage page object to do the work.
  loginAs: async ({ page }, use) => {
    await use(async (user) => { // 'user' will be the parameter for loginAs().
      const loginPage = new LoginPage(page);
      await loginPage.goto();

      const email = users[user].email;
      const password = users[user].password;
      await loginPage.login(email, password);

      await expect(page).toHaveURL('/account');
    });
  },

  // TODO: add a login fixture that works like loginAs, but uses the email
  // and password passed to it instead of looking up a user.
});

export { expect } from '@playwright/test';
