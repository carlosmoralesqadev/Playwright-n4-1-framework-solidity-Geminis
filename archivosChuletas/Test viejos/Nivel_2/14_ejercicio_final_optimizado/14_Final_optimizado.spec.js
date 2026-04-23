import { test, expect } from "@playwright/test";

import { interLocators } from "./14_Final_optimizado_locators";
import { hacerLogin } from "./14_Final_optimizado_funciones";

test.describe("14 - B", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(interLocators.page);
    });

    test("Login exitoso", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userName, interLocators.login.userPassword, true);
    });

    test("Logout", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userName, interLocators.login.userPassword, "logout");
    });

    test("Login fallido", async ({ page }) => {
        await hacerLogin(page, interLocators.login.userNameWrong, interLocators.login.userPasswordWrong, false);
    });
});
