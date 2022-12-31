const playwright = require('playwright');

(async () => {
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();
  try {
    await page.locator("text=Foo").click({
      timeout: 100,
    })
  } catch (error) {
    if (error instanceof playwright.errors.TimeoutError)
      console.log("Timeout test!")
  }
  await browser.close();
})();

