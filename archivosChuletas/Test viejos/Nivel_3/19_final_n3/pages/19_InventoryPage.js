import { Locators } from "../data/19_data.js";
import { BasePage } from "./base/19_BasePage.js";
import { expect } from "@playwright/test";

export class InventoryPage extends BasePage {
    /** @param {import ('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.productContainer = page.getByTestId(Locators.selectores.inventory.productContainer);

        this.iconCart = page.getByTestId(Locators.selectores.inventory.iconCart);

        this.titleCart = page.getByTestId(Locators.selectores.general.title);
    }

    async agregarProductoPorIndice(indice) {
        const item = this.productContainer.nth(indice);

        await item.getByRole("button", { name: Locators.selectores.inventory.btnAddToCart }).click();
    }

    async navegarToCartPage() {
        await this.iconCart.click();

        await expect(this.titleCart).toBeVisible();

        await expect(this.titleCart).toContainText(Locators.selectores.cart.titleTextCart);
    }
}
