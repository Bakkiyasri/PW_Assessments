import { expect, test } from "@playwright/test"
test('Decathlon Product Search, Filter & Add to Cart', async ({ page }) => {
    // 1. Launch the browser
    // 2. Navigate to https://www.decathlon.in/
    await page.goto("https://www.decathlon.in/");
    await page.waitForLoadState("domcontentloaded");
    // 3. Verify the user is navigated to the Decathlon home page
    await expect(page).toHaveTitle("Buy Sporting Goods, Sportswear and Equipments | Download App");
    // 4. Click on the Search icon on the home page
    await page.locator('//input[@type="search"]').click();
    // 5. Verify the search input field is enabled
    let searchBtnEnabled = await page.locator('//input[@type="search"]').isEnabled();
    if (searchBtnEnabled = true) {
        console.log("Search button is enabled");
    }
    else {
        console.log("Search button is NOT enabled");
    }
    // 6. Enter the product name as "shoes" in the search field
    await page.locator('//input[@type="search"]').fill("shoes");
    // 7. Press Enter to search the product
    await page.locator('//input[@type="search"]').press('Enter');
    // 8. Capture and print the page title in the console
    await page.waitForTimeout(2000);
    console.log(await page.title());
    // 9. Verify the page title is displayed as "Search | shoes"
    await expect(page).toHaveTitle("Search | shoes");
    // 10. Click on the "Running" category filter
    await page.locator('//span[text()="Sport"]').click();
    await page.locator('//input[@data-test-id="filter-checkbox-sport_pratice_en-Running"]').click();
    // 11. Click on the "Men" gender filter
    await page.locator('//span[text()="Gender"]').click();
    await page.locator('//input[@data-test-id="filter-checkbox-gender_id_en-MEN"]').click();
    // 12. Click on the shoe size filter "UK 10.5"
    await page.locator('//span[@data-test-id="title:Size"]').click();
    await page.locator('//input[@data-test-id="filter-checkbox-indian_size-10.5"]').click();
    // 13. Click on the "Most relevant" sorting dropdown
    await page.locator('//button[@data-test-id="sort-bar-desktop:dropdown-button"]//span[text()="Most relevant"]').click();
    // 14. Select "Price: Low to High" from the sorting options
    await page.locator('//span[text()="Price (low → high) "]').click();
    // 15. Click on the first product from the displayed product list
    await page.locator('//div[@data-test-id="search-products-grid"]/div').first().click();
    // 16. Select the shoe size "UK 10.5 - EU 45" on the product detail page
    await page.locator('//span[@data-test-id="pdp-size-option-text-6"]').click();
    // 17. Click on the "Add to Cart" button
    await page.locator('//span[text()="Add to cart"]').click();

    //if the popup appears, click Close
    await page.waitForTimeout(2000);
    await page.locator('//div[@class="dy-lb-close"]').click();
    // 18. Click on the Cart option
    await page.locator('//a[@href="/checkout/cart"]').click();
    await page.waitForTimeout(2000);
    // 19. Fetch the total cart value
    let TotalCartValue = await page.locator('//div[@data-test-id="cart:cart-checkout-total-cart-value"]').innerText();
    // 20. Print the total cart amount in the console
    TotalCartValue = TotalCartValue.replace(/[^0-9]/g, "");
    console.log("Total Cart value is ", TotalCartValue);

})