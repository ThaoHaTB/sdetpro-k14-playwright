import {selector} from "../SelectorDecorator";
import {Locator} from "@playwright/test";
import BaseCheckoutComponent from "./BaseChecoutComponent";

@selector("#opc-shipping")
export default class ShippingAddressComponent extends BaseCheckoutComponent{
    protected constructor(component: Locator) {
        super(component);
    }

}