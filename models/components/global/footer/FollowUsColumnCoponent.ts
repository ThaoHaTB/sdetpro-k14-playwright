import FooterColumnComponent from "./FooterColumnComponent";
import {Locator} from "@playwright/test";

export default class InformationColumnComponent extends FooterColumnComponent {

    public static selector: string = ".column.follow-us";

    constructor(component: Locator) {
        super(component);
    }

}