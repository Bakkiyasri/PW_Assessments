import { test } from "@playwright/test"
test('Create Lead using CSS', async ({ page }) => {
    page.goto("https://leaftaps.com/opentaps/control/main");
    await page.waitForLoadState("domcontentloaded");  //wait till the page loads completely

    //Locators: "id" tag -> starts wiith #
    await page.locator('#username').fill("democsr2");   //enter username
    //Locators: attribute and value -> [attrName="attrValue"]
    await page.locator('[name="PASSWORD"]').fill("crmsfa"); //enter password
    //Locators: class -> starts with . (dot); if there is a space in the class name, replace the same with . (dot)
    await page.locator('.decorativeSubmit').click();    //Login
    await page.waitForTimeout(2000);

    await page.locator('text=CRM/SFA').click(); //Click on the CRM/SFA link
    await page.waitForTimeout(3000);

    //Click on Leads tab and then Create Lead
    await page.locator('[href="/crmsfa/control/leadsMain"]').click();
    await page.waitForTimeout(2000);
    await page.locator('a[href="/crmsfa/control/createLeadForm"]').click();
    await page.waitForTimeout(2000);

    //Fill the Company Name, First Name, Last Name, Salutation, Title, Annual Revenue, Department
    await page.locator('#createLeadForm_companyName').fill("Testleaf");
    //Locators: nth() -> last() method 
    await page.locator('[name="firstName"]').last().fill("Bakkiyasri");
    //Locators: > (angular brackett) used for locating the immediate child of td
    await page.locator('td>input[name="lastName"]').fill("Lakshman");
    //Locators: tagName[attrName="attrValue"]
    await page.locator('input[id="createLeadForm_personalTitle"]').fill("Ms");
    //Locators: id -> # used
    await page.locator('#createLeadForm_generalProfTitle').fill("Automation Engineer");
    await page.locator('#createLeadForm_annualRevenue').fill("500000");
    await page.locator('#createLeadForm_departmentName').fill("IT");

    //print all the dropdown values: used nth() function to locate the elements one by one
    let dropdownOptions = page.locator('[name="dataSourceId"] option');
    for (let i = 0; i < await dropdownOptions.count(); i++) {
        console.log("Dropdown Value", i, await dropdownOptions.nth(i).innerText());
    }

    //print number of dropdown values -> used count() method
    console.log("Number of Dropdown options", await dropdownOptions.count());

    // Select the dropdown values using index, value and label
    await page.locator('#createLeadForm_dataSourceId').selectOption({ index: 4 }); // Selects Employee
    await page.waitForTimeout(2000);
    await page.locator('#createLeadForm_dataSourceId').selectOption({ value: "LEAD_WEBSITE" }); // Selects Website
    await page.waitForTimeout(2000);
    await page.locator('#createLeadForm_dataSourceId').selectOption({ label: "Partner" }); // Selects Partner 
    await page.waitForTimeout(2000);

    //Fill the Phonenumber and click on 'Create Lead' button
    await page.locator('#createLeadForm_primaryPhoneNumber').fill("9876543219");
    await page.locator('.smallSubmit').click();
})
