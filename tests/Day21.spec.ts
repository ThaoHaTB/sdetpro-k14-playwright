import {test} from'@playwright/test';
const url='https://the-internet.herokuapp.com/javascript_alerts';
test('',async({page})=>{
    page.goto(url);
    const jsAlertBtnEle=page.locator('[onclick="jsAlert()"]');
})