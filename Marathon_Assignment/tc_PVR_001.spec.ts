import { expect, test } from "@playwright/test"
test('Book Movie Ticket in PVR Cinemas', async ({ page }) => {
    // 1. Launch browser and open PVR Cinemas
    await page.goto(" https://www.pvrcinemas.com/");
    await page.waitForLoadState("domcontentloaded");
    await page.locator('[class="cities-placed"]').last().click();
    // 2. Select the city as "Chennai"
    await page.locator('//input[@placeholder="Search for city"]').fill("Chennai");
    await page.locator('//li[@class="p-autocomplete-item"]').click();
    //3. Choose cinema from the available list 
    await page.locator('[class="cinemas-inactive"]').click();
    await page.locator('//span[@class="p-dropdown-label p-inputtext p-placeholder" and text()="Select Cinema"]').click();
    await page.getByText('INOX Chennai Citi Centre,Dr. R. K. Salai Chennai').click();
    await page.waitForTimeout(3000);
    //4. Select movie date
    await page.locator('//span[text()="Tomorrow"]').click();
    //5. Choose any available movie
    await page.waitForTimeout(3000);
    await page.locator('//li[@class="p-dropdown-item"]/span[text()="DOROTHY"]').click();
    // 6. Select available show time
    await page.locator('//ul[@class="p-dropdown-items"]').first().click();
    // 7. Click on Book button
    await page.locator('//button[@aria-label="Submit"]//span[text()="Book"]').click();
    // 8. Click on Accept for Terms & Conditions
    await page.locator('//button[text()="Accept"]').click();
    await page.waitForTimeout(2000);
    await page.locator('//button[text()="Accept"]').click();
    // 9. Select the available seat
    await page.locator('//span[text()="D"]/ancestor::tr//span[text()="21"]').click(); //XPATH - Move to ancestor and then write logic for syntax
    // 10. Verify seat information and total ticket amount using assertions
    await page.locator('//button[text()="Proceed"]').click();
    await page.waitForTimeout(5000);
    // 11. Verify the Title of the page
    await page.title();
    await expect(page).toHaveTitle("PVR Cinemas");
    // 12. Proceed to booking
    await page.locator('//button[text()="Continue"]').click();

})