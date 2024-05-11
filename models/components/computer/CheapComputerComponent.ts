import ComputerEssentialComponent from "./ComputerEssentialComponent";
import {Locator} from "@playwright/test";
import {selector} from "../SelectorDecorator";

@selector(".product-essential")
export default class CheapComputerComponent extends ComputerEssentialComponent {
    private productAttrRad = '//label[contains(text(), "@type")]/../input';
    constructor(component: Locator) {
        super(component);
    }

    async selectProcessorType(type: string): Promise<void> {
        await this.selectRadioButton(type);
    }

    async selectRAMType(type: string): Promise<void> {
        await this.selectRadioButton(type);
    }

    async selectRadioButton(type: string): Promise<void>{
        const selectorValue= this.productAttrRad.replace('@type',type);
        await this.component.locator(selectorValue).click();
    }

    async selectSoftware(type: string): Promise<void>{
        await this.selectRadioButton(type);
    }

}