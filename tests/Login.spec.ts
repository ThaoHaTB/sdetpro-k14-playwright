import { test } from '@playwright/test';

test('Link text -Xpath', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //await page.locator('teocodon').click(); //=> locator-> instance
    const footerLinkEle=await page.waitForSelector('//a[contains(text(),"Elemental")]',{timeout:10000});
    footerLinkEle.click();

    // Debug only
    await page.waitForTimeout(1000);
});

