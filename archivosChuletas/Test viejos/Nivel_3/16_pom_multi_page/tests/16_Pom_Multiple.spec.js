import { test, expect } from "@playwright/test";
//import { Locators } from './archivo_locators.js';
import { LoginPage } from "../pages/LoginPage.js";
import { Locators } from "../data/testData.js";

test.describe("Funcionalidad", () => {
    /** @type {LoginPage} */
    let login;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        await login.navegarToSauceDemo();
    });

    test("Pasar pagina", async () => {
        const productsPage = await login.hacerLogin(Locators.login.userName, Locators.login.passUser);

        await productsPage.validarEstavisibleBackProduct();

        await productsPage.esElPrimeroBackPack();

        await productsPage.esElPrimeroItemBackPack();
    });
});
