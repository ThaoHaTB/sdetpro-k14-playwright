import { Locator } from "@playwright/test";

export default class BaseCheckoutComponent {

    private continueBtnSel = "input[value='Continue']"

    constructor(protected component: Locator) {
        this.component = component
    }

     public async clickOnContinueBtn(): Promise<void> {
        await this.component.locator(this.continueBtnSel).click();
        await this.component.locator(this.continueBtnSel).waitFor({state: "hidden", timeout: 5 * 1000});
    }
}