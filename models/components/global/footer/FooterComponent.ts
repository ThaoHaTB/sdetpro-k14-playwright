import {Locator} from "@playwright/test";
import InformationColumnComponent from "./InformationColumnComponent";
import CustomerServiceColumnComponent from "./CustomerServiceColumnComponent";
import MyAccountColumnComponent from "./MyAccountColumnComponent";
import FollowUsColumnComponent from "./FollowUsColumnCoponent";

export default class FooterComponent {

    public static selector: string = ".footer";

    constructor(private component: Locator) {
        this.component = component;
    }

    informationColumnComponent(): InformationColumnComponent {
        return new InformationColumnComponent(this.component.locator(InformationColumnComponent.selector));
    }

    customerServiceColumnComponent(): CustomerServiceColumnComponent {
        return new CustomerServiceColumnComponent(this.component.locator(CustomerServiceColumnComponent.selector));
    }

    // TODO: Add 2 more column components below
    myAccountColumnComponet(): MyAccountColumnComponent{
        return new MyAccountColumnComponent(this.component.locator(MyAccountColumnComponent.selector));
    }

    followUsColumnComponet(): FollowUsColumnComponent{
        return new FollowUsColumnComponent(this.component.locator(FollowUsColumnComponent.selector));
    }
}