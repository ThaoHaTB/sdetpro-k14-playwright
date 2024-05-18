import {Page} from "@playwright/test";
import HeaderComponent from "../components/global/header/HeaderComponent";
import PageBodyComponent from "../components/PageBodyComponent";
import FooterComponent from "../components/global/footer/FooterComponent";

export default class HomePage {

    constructor(private page: Page) {
        this.page = page;
    }

    headerComponent(): HeaderComponent {
        return new HeaderComponent(this.page.locator(HeaderComponent.selectorValue));
    }

    pageBodyComponent(): PageBodyComponent {
        return new PageBodyComponent(this.page.locator(PageBodyComponent.selectorValue));
    }
    footerComponent(): FooterComponent {
        return new FooterComponent(this.page.locator(FooterComponent.selectorValue));
    }
}