import { test, expect } from "@playwright/test";
import { Locators } from "../data/testData.js";
import { LoginPage } from "../pages/LoginPage.js";
import { ProductsPage } from "../pages/ProductsPage.js";
import { BasePage  } from "../pages/base/BasePage.js"

test.describe("Funcionalidad", () => {
    test("Test herencia", async ({ page }) => {
        /** @type {LoginPage} */
        const login = new LoginPage(page);
        /** @type {ProductsPage} */
        const products = new ProductsPage(page);

        await login.navegar()
        await login.hacerLogin()
        await products.esperar(3000);
        await products.validarEntrada()

    });
});

