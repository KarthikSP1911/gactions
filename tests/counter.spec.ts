import { test, expect } from "@playwright/test";

test("has heading and working counter", async ({ page }) => {
  await page.goto("/");

  // Expect title to contain the demo header text.
  await expect(page.locator("h1")).toContainText(
    "CI/CD GitHub Actions Demo Project"
  );

  // Check the initial count value.
  const counterValue = page.locator('[data-testid="count-value"]');
  await expect(counterValue).toHaveText("0");

  // Click increment button and check count.
  const incrementBtn = page.locator('[data-testid="increment-button"]');
  await incrementBtn.click();
  await expect(counterValue).toHaveText("1");

  // Click decrement button and check count.
  const decrementBtn = page.locator('[data-testid="decrement-button"]');
  await decrementBtn.click();
  await expect(counterValue).toHaveText("0");
});
