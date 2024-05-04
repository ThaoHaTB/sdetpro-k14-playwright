import { Page } from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";
import CustomerColumnComponent from "../../models/components/global/footer/CustomerServiceColumnComponent";
import MyAccountColumnComponent from "../../models/components/global/footer/MyAccountColumnComponent";
import FollowUsColumnComponent from "../../models/components/global/footer/FollowUsColumnCoponent";
import FooterColumnComponent from "../../models/components/global/footer/FooterColumnComponent";
import { deepStrictEqual } from 'assert';

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    // Service method
    async verifyFooterComponent(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        await this.verifyInformationColumn(footerComponent);
        await this.verifyCustomerServiceColumn(footerComponent);
        await this.verifyMyAccountColumn(footerComponent);
        await this.verifyFollowUsColumn(footerComponent);
    }

    // Support methods
    private async verifyInformationColumn(footerComponent: FooterComponent): Promise<void> {
        const expectedLinkTexts: string[] =
            ['Sitemap', 'Shipping & Returns', 'Privacy Notice', 'Conditions of Use', 'About us', 'Contact us'];
        const expectedHrefs: string[] =
            ['/sitemap', '/shipping-returns', '/privacy-policy', '/conditions-of-use', '/about-us', '/contactus'];
        const informationColumnComp: InformationColumnComponent = footerComponent.informationColumnComponent();
        await this.verifyFooterColumn(informationColumnComp, expectedLinkTexts, expectedHrefs);
    }

    private async verifyCustomerServiceColumn(footerComponent: FooterComponent): Promise<void> {
        const expectedLinkTexts: string[] =
            ['Search', 'News', 'Blog', 'Recently viewed products', 'Compare products list', 'New products'];
        const expectedHrefs: string[] =
            ['/search', '/news', '/blog', '/recentlyviewedproducts', '/compareproducts', '/newproducts'];
        const customerColumCoponent: CustomerColumnComponent = footerComponent.customerServiceColumnComponent();
        await this.verifyFooterColumn(customerColumCoponent, expectedLinkTexts, expectedHrefs);

    }

    private async verifyMyAccountColumn(footerComponent: FooterComponent): Promise<void> {
        const expectedLinkTexts: string[] =
            ['My account', 'Orders', 'Addresses', 'Shopping cart', 'Wishlist'];
        const expectedHrefs: string[] =
            ['/customer/info', '/customer/orders', '/customer/addresses', '/cart', '/wishlist'];
        const myAccountColumnComponent: MyAccountColumnComponent = footerComponent.myAccountColumnComponet();
        await this.verifyFooterColumn(myAccountColumnComponent, expectedLinkTexts, expectedHrefs);

    }

    private async verifyFollowUsColumn(footerComponent: FooterComponent): Promise<void> {
        const expectedLinkTexts: string[] =
            ['Facebook', 'Twitter', 'RSS', 'YouTube', 'Google+'];
        const expectedHrefs: string[] =
            ['http://www.facebook.com/nopCommerce', 'https://twitter.com/nopCommerce', '/news/rss/1', 'http://www.youtube.com/user/nopCommerce', 'https://plus.google.com/+nopcommerce'];
        const followUsColumnComponent: FollowUsColumnComponent = footerComponent.followUsColumnComponet();
        await this.verifyFooterColumn(followUsColumnComponent, expectedLinkTexts, expectedHrefs);
    }
    private async verifyFooterColumn(
        footerColumnComp: FooterColumnComponent, expectedLinkTexts: string[],
        expectedHrefs: string[]): Promise<void> {

        const actualLinkTexts: string[] = [];
        const actualHrefs: string[] = [];
        const footerCompLinks = await footerColumnComp.links();

        for (let footerCompLink of footerCompLinks) {
            const footerLinkText = await footerCompLink.textContent();
            const footerLinkHref = await footerCompLink.getAttribute('href');

            actualLinkTexts.push(footerLinkText);
            actualHrefs.push(footerLinkHref);
        }

        deepStrictEqual(actualLinkTexts, expectedLinkTexts,
            `Actual link texts and expected link texts is not the same. Actual: ${actualLinkTexts} Expected: ${expectedLinkTexts}`);

        deepStrictEqual(actualHrefs, expectedHrefs,
            `Actual hrefs and expected hrefs is not the same. Actual: ${actualHrefs} Expected: ${expectedHrefs}`);
    }
}