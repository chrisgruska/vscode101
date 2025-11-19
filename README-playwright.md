Playwright setup (TypeScript)

Steps to finish setup after installing Node.js and npm:

1. From the project root run:

   npm install -D @playwright/test

2. Install browsers:

   npx playwright install

3. (Optional) Generate Playwright test fixtures/config (we already added a minimal `playwright.config.ts` and an example test):

   npx playwright test --init

4. Run tests:

   npm test

Notes:
- If you want TypeScript typing for Playwright available to editors, install types as part of devDependencies by installing `@playwright/test` (it bundles types).
- If behind a corporate proxy, set HTTP_PROXY/HTTPS_PROXY environment variables before running `npx playwright install`.
