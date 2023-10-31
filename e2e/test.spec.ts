import { test, expect } from "@playwright/test";

test("should navigate to www.shutterstock.com", async ({ page }) => {
  await page.goto("https://www.shutterstock.com/");

  await page.getByPlaceholder("Start your next project").click();
  await page.getByPlaceholder("Start your next project").fill("dogs");
  await page.getByPlaceholder("Start your next project").press("Enter");
  await page
    .locator(
      '[data-automation="AssetGrids_MosaicAssetGrid_div"] > [data-automation="AssetGrids_GridItemContainer_div"]:nth-child(1)'
    )
    .click();
  await page.getByLabel("Download for free").click();
  const signUpButton = page.getByRole("button", { name: "Get started" });
  expect(signUpButton).toBeDefined();
});
