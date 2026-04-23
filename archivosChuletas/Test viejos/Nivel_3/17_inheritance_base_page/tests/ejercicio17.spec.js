import { test, expect } from "@playwright/test";
import { Locators } from "../data/17_testData.js";
import { LoginPage } from "../pages/17_LoginPage.js";
import { ProductsPage } from "../pages/17_ProductsPage.js";
import { NavBarPage } from "../pages/components/17_Navbar.js";


test.describe("Funcionalidad", () => {
    /** @type {LoginPage} */
    let login;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        await login.navegarToSaucedemo();
    });

    test("Login -> Logout", async () => {
        const productsPage = await login.hacerLogin();
        await productsPage.navbarSection.clickLogout();
    });
});
