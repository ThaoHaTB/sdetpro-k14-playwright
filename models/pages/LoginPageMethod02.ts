// INTRODUCING ELEMENTs/LOCATORs
import {Locator, Page} from "@playwright/test";

export default class LoginPageMethod02 {

    // Scope to keep element selectors
    private usernameLoc = '#username';
    private passwordLoc = '#password';
    private loginBtnLoc = 'button[type="submit"]';

    // Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    // Return the found elements
    username(): Locator {
        return this.page.locator(this.usernameLoc);
    }

    password(): Locator {
        return this.page.locator(this.passwordLoc);
    }

    loginBtn(): Locator {
        return this.page.locator(this.loginBtnLoc);
    }

}

// trả vể locator only, sử dụng khi muốn thực hiện nhiều interaction trên 1 element