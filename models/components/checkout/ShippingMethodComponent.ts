import { selector } from "../SelectorDecorator";
import { Locator } from "@playwright/test";
import BaseCheckoutComponent from "./BaseChecoutComponent";

@selector("#opc-shipping_method")
export default class ShippingMethodComponent extends BaseCheckoutComponent {
    private readonly shippingMethodRbtn = '//*[@id="checkout-shipping-method-load"]//ul/li[@index]//input'
    protected constructor(component: Locator) {
        super(component);
    }
    public async selectRandomMethod(): Promise<void> {
        const index = Math.floor(Math.random() * 3) + 1;
        const shippingMethodRbtnLocator = this.shippingMethodRbtn.replace('@index', String(index));
        await this.component.locator(shippingMethodRbtnLocator).click();
        
    }
}