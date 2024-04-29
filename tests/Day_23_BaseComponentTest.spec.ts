import {test} from '@playwright/test';
import HomePage from "../models/pages/HomePage";
import FooterComponent from "../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../models/components/global/footer/InformationColumnComponent";
import CustomerServiceColumnComponent from "../models/components/global/footer/CustomerServiceColumnComponent";
import MyAccountColumnComponent from "../models/components/global/footer/MyAccountColumnComponent";
import FollowUsColumnComponent from "../models/components/global/footer/FollowUsColumnCoponent";


test('Test Base Component in Page', async ({page}) => {

    await page.goto('https://demowebshop.tricentis.com/');
    const homePage: HomePage = new HomePage(page);
    const footerComponent: FooterComponent = homePage.footerComponent();
    const informationColumnComponent: InformationColumnComponent = footerComponent.informationColumnComponent();
    const customerServiceColumnComponent: CustomerServiceColumnComponent = footerComponent.customerServiceColumnComponent();
    const myAccountColumnComponet:MyAccountColumnComponent=footerComponent.myAccountColumnComponet();
    const followUsColumnComponet:FollowUsColumnComponent=footerComponent.followUsColumnComponet();

    const informationColumnTitle = await informationColumnComponent.title().textContent();
    const customerServiceColumnTitle = await customerServiceColumnComponent.title().textContent();
    const myAccountColumnComponetTitle= await myAccountColumnComponet.title().textContent();
    const followUsColumnComponetTitle= await followUsColumnComponet.title().textContent();

    console.log(`informationColumnTitle: ${informationColumnTitle}`);
    console.log(`customerServiceColumnTitle: ${customerServiceColumnTitle}`);
    console.log(`myAccountColumnTitle: ${myAccountColumnComponetTitle}`);
    console.log(`fllowUsColumnTitle: ${followUsColumnComponetTitle}`);
});