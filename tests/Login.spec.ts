import { test } from '@playwright/test';

test('Link text -Xpath', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //await page.locator('teocodon').click(); //=> locator-> instance
    const footerLinkEle=await page.waitForSelector('//a[contains(text(),"Elemental")]',{timeout:10000});
    footerLinkEle.click();

    // Debug only
    await page.waitForTimeout(1000);
});

test('Link text - CSS', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //await page.locator('teocodon').click(); //=> locator-> instance
    const footerLinkEle=await page.locator('a: has-text("Elemental")');
    footerLinkEle.click();

    // Debug only
    await page.waitForTimeout(1000);
});

test('Link text - Filter', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //await page.locator('teocodon').click(); //=> locator-> instance
    const footerLinkEle=await page.locator('a').filter({hasText:'Elemental'});
    footerLinkEle.click();

    // Debug only
    await page.waitForTimeout(1000);
});

test('Link text - MultipleMtaching', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //await page.locator('teocodon').click(); //=> locator-> instance
    const footerLinkEle=await page.locator('a').elementHandles();
    await footerLinkEle[10].click();

    // Debug only
    await page.waitForTimeout(1000);
});


test('Handle Login form', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //Navigate
    await page.locator('a').filter({hasText:"Form Authentication"}).click();
    await page.waitForLoadState('domcontentloaded');

    //Form interaction
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState('domcontentloaded');

    // Debug only
    await page.waitForTimeout(1000);
});

test.only('Element text', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    //Navigate
    await page.locator('a').filter({hasText:"Form Authentication"}).click();
    await page.waitForLoadState('domcontentloaded');

    //Form interaction
    await page.locator('#username').fill('tomsmith');
    await page.locator('#password').fill('SuperSecretPassword!');
    await page.locator('button[type="submit"]').click();
    await page.waitForLoadState('domcontentloaded');

    const textContent= await page.locator('h4').textContent(); //=> get all text kể cả hiden
    const innerText= await page.locator('h4').innerText(); //=> chỉ lấy text visible trên UI
    // Debug only
    await page.waitForTimeout(1000);
});