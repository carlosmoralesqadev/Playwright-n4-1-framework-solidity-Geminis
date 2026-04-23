import { expect } from "@playwright/test";
import { Locators } from "../data/testData.js";

import { ProductsPage } from "./16_ProductsPage.js";

export class LoginPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.userInput = page.getByPlaceholder(/Username/i);
        this.passInput = page.getByPlaceholder(/Password/i);
        this.btnLogin = page.getByTestId("login-button");
    }

    async navegarToSauceDemo() {
        await this.page.goto(Locators.page);
    }

    async hacerLogin(user, pass) {
        await this.userInput.fill(user);
        await this.passInput.fill(pass);
        await this.btnLogin.click();

        return new ProductsPage(this.page);
    }
}
