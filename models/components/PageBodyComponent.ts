import {Locator} from "@playwright/test";
import ProductItemComponent from "./ProductItemComponent";

export default class PageBodyComponent {

    public static selector: string = ".page-body";
    private header: string='.title';

    constructor(private component: Locator) {
        this.component = component;
    }

// List of component in Parent component    
    async productItemComponentList(): Promise<ProductItemComponent[]> {
        const productItemComponents = await this.component.locator(ProductItemComponent.selector).all();
        return productItemComponents.map(comp => new ProductItemComponent(comp));
    }

    title(): Locator{
        return this.component.locator(this.header);
    } 
}