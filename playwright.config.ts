import { defineConfig, devices } from '@playwright/test';

// Environments of the Toolshop site, chosen with the ENV variable (default: prod).
const TOOLSHOP_ENVS = {
  prod: 'https://practicesoftwaretesting.com',
  bugs: 'https://with-bugs.practicesoftwaretesting.com',
} as const;

type EnvName = keyof typeof TOOLSHOP_ENVS;

const env = (process.env.ENV ?? 'prod') as EnvName;

if (!(env in TOOLSHOP_ENVS)) {
  throw new Error(`Unknown ENV "${env}". Valid options: ${Object.keys(TOOLSHOP_ENVS).join(', ')}`);
}

const SITES = {
  qaplayground: {
    baseURL: 'https://qaplayground.com/',
    testDir: './tests/fundamentals',
  },
  toolshop: {
    baseURL: TOOLSHOP_ENVS[env],
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
    // Runs *.setup.ts files (like the Authentication module's login) before
    // any project that lists it in `dependencies`.
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup'],
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
