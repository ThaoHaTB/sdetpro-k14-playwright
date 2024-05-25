import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";
import BaseCheckoutComponent from "./BaseChecoutComponent";

@selector("#opc-payment_info")
export default class PaymentInformationComponent extends BaseCheckoutComponent{
    private priceTableRowSel = 'table tr';
    private priceTypeSel = '.cart-total-left span';
    private priceValueSel = '.cart-total-right .product-price';
    private termOfServiceCheckboxSel = '#termsofservice';
    private checkoutBtnSel = '#checkout';

    protected constructor(component: Locator) {
        super(component);
    }

    public async priceCategories(): Promise<any> {
        let priceCategories = {};
        const priceTableRowElems = await this.component.locator(this.priceTableRowSel).all();
        for (let tableRowEle of priceTableRowElems) {
            const priceTypeText = await tableRowEle.locator(this.priceTypeSel).innerText();
            const priceValueText = await tableRowEle.locator(this.priceValueSel).innerText();
            priceCategories[priceTypeText] = Number(priceValueText);
        }
        return priceCategories;
    }

    public async acceptTOS(): Promise<void> {
        await this.component.locator(this.termOfServiceCheckboxSel).click();
    }

    public async clickOnCheckoutBtn(): Promise<void> {
        await this.component.locator(this.checkoutBtnSel).click();
    }

}