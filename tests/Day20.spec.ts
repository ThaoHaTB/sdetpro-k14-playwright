import {test} from'@playwright/test'
test('Handel Dropdown list', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const dropdonEle= await page.locator('#dropdown');

    //Selct option 1
    await dropdonEle.selectOption({index:1});
    await page.waitForTimeout(1000);

      //Selct option 2
      await dropdonEle.selectOption({value:'2'});
      await page.waitForTimeout(1000);
});

test('Handel iframe', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/iframe');
    const iframeEle= await page.frameLocator('iframe[id^="mce"]');

    const editTextAreaEle= await iframeEle.locator('body p');

    await editTextAreaEle.click();
    await editTextAreaEle.clear();
    await editTextAreaEle.fill('New Content');

    // interaction with main frame's element
    const footerPowerByLinkEle= await page.locator('a:has-text("Elemental")');
    await footerPowerByLinkEle.click();
});
test('Mouse hover and narowdown searching scope', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/hovers');
    const iframeEle= await page.frameLocator('iframe[id^="mce"]');
    //Find all figures
    const allFigureEles=await page.locator('.figure').all();

    //Loop all the figures
    for(const figureEle of allFigureEles){
        const imgEle =await figureEle.locator('img');

        const usernameEle= await figureEle.locator('h5');
        const viewProfileHyperEle= await figureEle.locator('a');
        const isUsernameVisible=await usernameEle.isVisible();
        const isviewProfileHyperEle= await viewProfileHyperEle.isVisible();
        console.log(`isUsernameVisible: ${isUsernameVisible}`);
        console.log(`isviewProfileHyperEle: ${isviewProfileHyperEle}`);
        
        // Mouse hover
        await imgEle.hover();

        const isUsernameVisibleAfter=await usernameEle.isVisible();
        const isviewProfileHyperEleAfter= await viewProfileHyperEle.isVisible();
        console.log(`isUsernameVisibleAfter: ${isUsernameVisibleAfter}`);
        console.log(`isviewProfileHyperEleAfter: ${isviewProfileHyperEleAfter}`);
        console.log('\n\n')
        //Debug
        await page.waitForTimeout(1000);
    }
    
});

test.only('Checking element status and handle dynamic states', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/dynamic_controls');
  
    //Locate 2 parent components
   const checkboxComp=await page.locator('#checkbox-example');
   const inputExmpleComp=await page.locator('#input-example');

   //Checkbox
   const checkboxEle=checkboxComp.locator('#checkbox input');
   const isEnabled=checkboxEle.isEnabled();
   let isSelected=checkboxEle.isChecked();

   console.log(`Is checkbox enabled: ${isEnabled}`);
   console.log(`Is checkbox enabled: ${isSelected}`);
   
   let isSelectedAfter= await checkboxEle.isChecked();
    if(!isSelectedAfter){
       await checkboxEle.click();
    }
    
    const removeBtnEle=checkboxComp.locator('button');
    await removeBtnEle.click();
    await page.waitForSelector('#checkbox-example #checkbox input',{state: 'hidden', timeout: 5*1000});

    // input
    const inputEle= inputExmpleComp.locator('input');
    const isInputEnabled=await inputEle.isEnabled();
    console.log(`Is input enabled: ${isInputEnabled}`);

    const btnEnable=inputExmpleComp.locator('button');
    if(!isInputEnabled){
        await btnEnable.click();
    }
    await page.waitForSelector('#loading',{state: 'hidden', timeout: 5*1000});
    const isInputEnabledAfter=await inputEle.isEnabled();
    console.log(`isInputEnabledAfter: ${isInputEnabledAfter}`);
    
    if(isInputEnabledAfter){
        await inputEle.fill('Enable input successfully');
    }
     await page.waitForTimeout(2000);
});