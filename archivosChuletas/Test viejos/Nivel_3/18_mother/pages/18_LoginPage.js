import { Locators } from "../data/18_testData.js";
import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage.js";

export class LoginPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.inputName = this.page.getByRole("textbox", { name: Locators.seccion.login.inputName });
        this.inputPass = this.page.getByRole("textbox", { name: Locators.seccion.login.inputPass });
        this.btnLogin = this.page.getByRole("button", { name: Locators.seccion.login.btnLogin });
    }

    async hacerLogin(user = Locators.seccion.login.userName, pass = Locators.seccion.login.userPass) {
        await this.inputName.fill(user);
        await this.inputPass.fill(pass);
        await this.btnLogin.click();
        await expect(this.btnLogin).not.toBeVisible();
    }
}
