import { test, expect } from  "@playwright/test";
import { BasePage } from      "../pages/base/BasePage.js";
import { LoginPage } from     "../pages/page/LoginPage.js";
import { InventoryPage } from "../pages/page/InventoryPage.js";
import { CartPage } from      "../pages/page/CartPage.js";
import { Locators } from      "../data/data.js";

test.describe("Challenge", () => {
    /** @type {LoginPage} */
    let login;
    /** @type {InventoryPage} */
    let inventory;
    /** @type {CartPage} */
    let cart;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        inventory = new InventoryPage(page);
        cart = new CartPage(page);

        await login.navegar();
    });

    test("Challenge n4", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.user, pass: Locators.login.credenciales.pass, tipo: true });

        await inventory.isPageInventoryOk();
    });
});
