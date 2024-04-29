import {Page} from "@playwright/test";
import HomePage from "../../models/pages/HomePage";
import FooterComponent from "../../models/components/global/footer/FooterComponent";
import InformationColumnComponent from "../../models/components/global/footer/InformationColumnComponent";
import CustomerColumnComponent from "../../models/components/global/footer/CustomerServiceColumnComponent";

export default class FooterTestFlow {

    constructor(private page: Page) {
        this.page = page;
    }

    // Service method
    async verifyFooterComponent(): Promise<void> {
        await this.verifyInformationColumn();
        await this.verifyCustomerServiceColumn();
        this.verifyMyAccountColumn();
        this.verifyFollowUsColumn();
    }

    // Support methods
    private async verifyInformationColumn(): Promise<void> {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const informationColumnComp: InformationColumnComponent = footerComponent.informationColumnComponent();
        const title = await informationColumnComp.title().textContent();
        console.log(`title: ${title}`);
    }

    private async verifyCustomerServiceColumn() {
        const homePage: HomePage = new HomePage(this.page);
        const footerComponent: FooterComponent = homePage.footerComponent();
        const customerServiceColumComp: CustomerColumnComponent = footerComponent.customerServiceColumnComponent();
        const title = await customerServiceColumComp.title().textContent();
        console.log(`title: ${title}`);

    }

    private verifyMyAccountColumn(): void {

    }

    private verifyFollowUsColumn(): void {

    }
}