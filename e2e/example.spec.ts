import { test, expect } from '@playwright/test';

test('homepage loads correctly', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/NextJS Starter/);

  // Expect the page to have a heading with the name "Next.js Starter Template".
  await expect(
    page.getByRole('heading', { name: /Next.js Starter Template/i })
  ).toBeVisible();
});

test('navigation works', async ({ page }) => {
  await page.goto('/');

  // Click the dashboard link
  await page.getByRole('link', { name: /dashboard/i }).click();

  // Expect the URL to contain dashboard
  await expect(page).toHaveURL(/.*dashboard/);
});

test('responsive design works on mobile', async ({ page }) => {
  // Set viewport to mobile size
  await page.setViewportSize({ width: 375, height: 667 });

  await page.goto('/');

  // Check that the main heading is still visible on mobile
  await expect(
    page.getByRole('heading', { name: /Next.js Starter Template/i })
  ).toBeVisible();
});
