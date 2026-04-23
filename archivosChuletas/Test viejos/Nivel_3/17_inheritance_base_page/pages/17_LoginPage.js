import { expect      }  from "@playwright/test";
import { Locators     } from "../data/17_testData.js";
import { ProductsPage } from "./17_ProductsPage.js";

export class LoginPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.nameInput = page.getByPlaceholder(/username/i);
        this.passInput = page.getByPlaceholder(/password/i);
        this.btnLogin = page.getByTestId("login-button");
        this.titleProducts = page.getByTestId("title");
        

    }

    async navegarToSaucedemo() {
        await this.page.goto(Locators.page);
    }

    async hacerLogin() {
        await this.nameInput.fill(Locators.login.userName);
        await this.passInput.fill(Locators.login.userPass);
        await this.btnLogin.click();
        await expect(this.titleProducts).toBeVisible();
        return new ProductsPage(this.page);
    }
}
