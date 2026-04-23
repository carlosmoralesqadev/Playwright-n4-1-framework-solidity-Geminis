//import { Locators } from "../tests/15_migracion_pom_locators.js";
import { expect } from "@playwright/test";


export class LoginPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.linkToLogin = page.getByText(/Form Authentication/i);

        this.userInput = page.getByLabel(/Username/i);
        this.passInput = page.getByLabel(/Password/i);

        this.loginBtn = page.getByRole("button", { name: /Login/i });
        this.logoutBtn = page.getByRole("link", { name: /Logout/i });

        this.msgLoginSuccesfull = page.getByText(/You logged into a secure area!/i);
        this.msgLoginFailed = page.getByText(/Your username is invalid!/i);
        this.msgLogout = page.getByText(/ You logged out of the secure area!/i);
    }

    async navToLogin(){
        await this.linkToLogin.click()
    }

    async hacerLogin(user, pass, esperado) {
        await this.completarFormulario(user, pass);

        if ((esperado === "logout")) {
            await this.logout();
        } else if ((esperado === true)) {
            await this.loginExitoso();
        } else if ((esperado === false)) {
            await this.loginFallido();
        } else {
            console.log(" No enviaste el parametro manejable");
        }

    }

    async completarFormulario(user, pass) {
        await this.userInput.fill(user);
        await this.passInput.fill(pass);
        await this.loginBtn.click();
    }
    async loginExitoso() {
        await expect(this.msgLoginSuccesfull).toBeVisible();
        await expect(this.loginBtn).not.toBeVisible();
        await expect(this.logoutBtn).toBeVisible();
    }
    async loginFallido() {
        await expect(this.msgLoginFailed).toBeVisible();
        await expect(this.loginBtn).toBeVisible();
        await expect(this.logoutBtn).not.toBeVisible();
    }
    async logout() {

        await this.loginExitoso()
        
        await this.logoutBtn.click();

        await expect(this.msgLogout).toBeVisible();
        await expect(this.loginBtn).toBeVisible();
        await expect(this.logoutBtn).not.toBeVisible();

    }
}
