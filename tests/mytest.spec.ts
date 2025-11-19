import { test, expect } from '@playwright/test';

test('google search test', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.locator('textarea[name="q"]').fill('Playwright testing');
    await page.locator('textarea[name="q"]').press('Enter');
    await expect(page).toHaveTitle(/chris/);

});