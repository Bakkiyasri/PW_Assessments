import { chromium, webkit, test } from "@playwright/test"

test('launchTwoBrowsers', async () => {
    const redbusUrl = "https://www.redbus.in/"

    //launch the Redbus application in edge browser
    let edgeBrowser = await chromium.launch({ channel: "msedge", headless: false }); //Define the browser
    let edgeContext = await edgeBrowser.newContext();
    let edgePage = await edgeContext.newPage();

    await edgePage.goto(redbusUrl); //open the redbus url
    await edgePage.waitForTimeout(3000) //wait for 3 seconds
    await edgePage.waitForLoadState('domcontentloaded'); // wait till the dom page is loaded completely
    console.log(edgePage.url()); //https://www.redbus.in/

    if (redbusUrl == edgePage.url()) //true
    {
        console.log("Redbus Url matches"); //Prints in terminal
    }
    else {
        console.log("Redbus Url not matches");
    }
    let title = await edgePage.title() //get the title of the redbus page
    console.log("Title of Redbus: ", title); //Bus Booking Online and Train Tickets at Lowest Price - redBus

    //launch the Flipkart application in webkit browser
    let webkitBrowser = await webkit.launch({ channel: "webkit", headless: false });
    let webkitContext = await webkitBrowser.newContext();
    let webkitPage = await webkitContext.newPage();

    const flipkartUrl = "https://www.flipkart.com"
    await webkitPage.goto(flipkartUrl); //open the flipkart url
    await webkitPage.waitForTimeout(3000);
    console.log(webkitPage.url()); //https://www.flipkart.com/

    if (flipkartUrl == webkitPage.url())  //false (there is a '/' at the end)
    {
        console.log("Flipkart Url matches");
    }
    else {
        console.log("Flipkart Url not matches"); //Prints in terminal
    }
    console.log("Title of Flipkart:", await webkitPage.title()); //Online Shopping India Mobile, Cameras, Lifestyle & more Online @ Flipkart.com

})
