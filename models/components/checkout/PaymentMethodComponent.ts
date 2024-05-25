import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";
import BaseCheckoutComponent from "./BaseChecoutComponent";

@selector("#opc-payment_method")
export default class PaymentMethodComponent extends BaseCheckoutComponent{
    protected constructor(component: Locator) {
        super(component)
    }

}