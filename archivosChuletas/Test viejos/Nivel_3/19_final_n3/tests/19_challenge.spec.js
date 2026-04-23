import { test, expect } from "playwright/test";
import { Locators } from "../data/19_data.js";
import { BasePage } from "../pages/base/19_BasePage.js";
import { LoginPage } from "../pages/19_LoginPage.js";
import { CartPage } from "../pages/19_CartPage.js";
import { InventoryPage } from "../pages/19_InventoryPage.js";

test.describe("Challenge - 18", () => {
    test("E2E", async ({ page }) => {
        /** @type {LoginPage } */
        const login = new LoginPage(page);

        /** @type {InventoryPage } */
        const inventory = new InventoryPage(page);

        /** @type {CartPage} */
        const cart = new CartPage(page);

        await login.navegar();
        await login.loginExitoso();

        await inventory.agregarProductoPorIndice(0);
        await inventory.navegarToCartPage();

        await cart.coincideElNombrePorIndice(0);
    });
});
