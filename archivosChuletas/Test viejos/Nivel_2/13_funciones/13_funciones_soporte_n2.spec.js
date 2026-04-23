import { test, expect } from "@playwright/test";

import { sauceLocators } from "./sauce_data.js";

import { realizarLogin } from "./sauce_utils.js";

test.describe("Desacoplamiento", () => {
    test.beforeEach(async ({ page }) => {

        await realizarLogin(page);
    });

    test("Comprar Productos", async ({ page }) => {
        //Seleccionar prodcutos
        await expect(page.getByText(sauceLocators.titleProducts)).toBeVisible();
        await page.getByTestId(sauceLocators.addBackpack).click();
        await page.getByTestId(sauceLocators.addBikeLight).click();
        await expect(page.getByTestId(sauceLocators.iconoCart)).toHaveText("2");
        await page.getByTestId(sauceLocators.iconoCart).click();

        // Chequear la comprar
        await expect(page.getByTestId(sauceLocators.titleYourCart)).toBeVisible();
        await expect(page.getByTestId(sauceLocators.cartList).getByTestId(sauceLocators.quantityProducts)).toHaveCount(2);
        await page.getByRole("button", {name: sauceLocators.buttonCheckout}).click()


        //Completar Formulario
        await expect(page.getByTestId(sauceLocators.titleForm).filter({hasText : sauceLocators.titleFormInfo})).toBeVisible();
        await page.getByTestId(sauceLocators.inputFirstName).fill("Carlos");
        await page.getByTestId(sauceLocators.inputLastName).fill("Morales");
        await page.getByTestId(sauceLocators.inputPostalCode).fill("1424");
        await page.getByTestId(sauceLocators.buttonContinue).click();

        //Checkout
        await expect(page.getByTestId(sauceLocators.titleCheckout).filter({hasText : sauceLocators.titleCheckoutInfo})).toBeVisible();
        await page.getByTestId(sauceLocators.buttonFinish).click();

        //Compra exitosa
        await expect(page.getByTestId(sauceLocators.messageConfirmId).filter({hasText: sauceLocators.messageConfirmTexto})).toBeVisible()


    });
});

/*
// Si configuraste Playwright para reconocer 'data-test' como testId:
await expect(page.getByTestId(Locators.productLocators.headerTitle)).toHaveText("Products");
// O si no lo configuraste, usando locator estándar:
await expect(page.locator(`[data-test="${Locators.productLocators.headerTitle}"]`)).toHaveText("Products");

export const productLocators = {
    titleProducts: /Products/i,
};
// Buscamos por el texto que contiene el span
await expect(page.getByText(Locators.productLocators.titleProducts)).toBeVisible();
*/
