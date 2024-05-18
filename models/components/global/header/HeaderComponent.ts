import {Locator} from "@playwright/test";
import SearchComponent from "./SearchComponent";
import { selector } from "../../SelectorDecorator";

@selector(".header")
export default class HeaderComponent {
   
    private shoppingCartLink: string = "#topcartlink a";

    constructor(private component: Locator) {
        this.component = component;
    }

    public searchComponent(): SearchComponent {
        return new SearchComponent(this.component.locator(SearchComponent.selectorValue));
    }

    public async clickOnShoppingCartLink(): Promise<void>{
        await this.component.locator(this.shoppingCartLink).click();
    }
}