// NOTE: a base component has NO selector
import {Locator} from "@playwright/test";

//Reuse base component
export default class FooterColumnComponent {

    private titleSel: string = "h3";
    private linkSel: string = "li a";

    // This one is to force concrete class (Component)'s constructor to call parent(BaseComponent)'s constructor
    constructor(private component: Locator) {
        this.component = component;
        this.component.scrollIntoViewIfNeeded();
    }

    title(): Locator {
        return this.component.locator(this.titleSel)
    }

    links(): Promise<Array<Locator>> {
        return this.component.locator(this.linkSel).all();
    }
}