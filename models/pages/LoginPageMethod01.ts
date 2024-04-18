// INTRODUCING MAIN INTERACTION METHODS
import {Page} from "@playwright/test";

export default class LoginPageMethod01 {

    // Scope to keep element selectors
    private usernameLoc = '#username';
    private passwordLoc = '#password';
    private loginBtnLoc = 'button[type="submit"]';

    // Constructor
    constructor(private page: Page) {
        this.page = page;
    }

    // Main interaction methods
    async inputUsername(username: string) {
        await this.page.locator(this.usernameLoc).fill(username);
    }

    async inputPassword(password: string) {
        await this.page.locator(this.passwordLoc).fill(password);
    }

    async clickOnLoginBtn() {
        await this.page.locator(this.loginBtnLoc).click();
    }
    
}

// Sử dụng khi thiết kế một component chỉ có 1 interaction