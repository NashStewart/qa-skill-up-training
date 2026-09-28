import { defineConfig, devices } from '@playwright/test';

const SITES = {
  qaplayground: {
    baseURL: 'https://qaplayground.com/',
    testDir: './tests/fundamentals',
  },
  orangehrm: {
    baseURL: 'https://opensource-demo.orangehrmlive.com',
    testDir: './tests/architecture',
  },
} as const;

type SiteName = keyof typeof SITES;

const site = (process.env.SITE ?? 'qaplayground') as SiteName;

if (!(site in SITES)) {
  throw new Error(`Unknown SITE "${site}". Valid options: ${Object.keys(SITES).join(', ')}`);
}

export default defineConfig({
  testDir: SITES[site].testDir,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: SITES[site].baseURL,
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      // Scoped to just the shared debugging fixture so every other
      // Fundamentals file keeps running chromium-only, unaffected.
      testMatch: 'account-setup-form.spec.ts',
    },
  ],
});
