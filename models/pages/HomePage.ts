import {Page} from "@playwright/test";
import HeaderComponent from "../components/global/header/HeaderComponent";
import ProductItemComponent from "../components/ProductItemComponent";

export default class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selector));
    }

    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponents = await this.page.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }

}