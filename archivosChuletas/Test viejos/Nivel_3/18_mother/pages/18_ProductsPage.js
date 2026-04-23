import { Locators } from "../data/18_testData.js";
import { expect } from "@playwright/test";
import { BasePage } from "./base/BasePage.js";

export class ProductsPage extends BasePage {
    constructor(page) {
        super(page);

        this.productsTitle = this.page.getByTestId(Locators.seccion.Products.productsTitle);
    }

    async validarEntrada() {
        await expect(this.productsTitle).toBeVisible();
        await expect(this.productsTitle).toHaveText(/Products/i);
    }
}
