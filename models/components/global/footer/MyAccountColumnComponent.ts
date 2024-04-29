import FooterColumnComponent from "./FooterColumnComponent";
import {Locator} from "@playwright/test";

export default class InformationColumnComponent extends FooterColumnComponent {

    public static selector: string = ".column.my-account";

    constructor(component: Locator) {
        super(component);
    }

}