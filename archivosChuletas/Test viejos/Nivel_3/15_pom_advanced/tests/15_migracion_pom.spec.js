import { test } from "@playwright/test";

import { Locators } from "../data/15_dataconfig.js";
import { LoginPage } from "../pages/LoginPage.js";

test.describe("Login", () => {
    /** @type {LoginPage} */
    let login;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        await page.goto(Locators.page);
        await login.navToLogin()
    });

    test("Login exitoso", async ({ page }) => {
        await login.hacerLogin(Locators.login.userName, Locators.login.userPass, true);        
    });

    test("Logout", async ({ page }) => {
        await login.hacerLogin(Locators.login.userName, Locators.login.userPass, "logout")
    });

    test("Login fallido", async ({ page }) => {
        await login.hacerLogin(Locators.login.userNameWrong, Locators.login.userPassWrong, false)
    });
});
