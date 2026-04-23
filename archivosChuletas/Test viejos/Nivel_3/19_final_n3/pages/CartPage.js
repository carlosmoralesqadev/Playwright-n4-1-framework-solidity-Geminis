import { Locators } from "../data/data.js";
import { BasePage } from "./base/BasePage.js";
import { expect   } from "@playwright/test";


export class CartPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.inventoryItem = page.getByTestId(Locators.selectores.cart.inventoryItem)

    }


    async coincideElNombrePorIndice(indice){
        const inventoryItem = this.inventoryItem.nth(indice);

        const inventoryItemName = inventoryItem.getByTestId(Locators.selectores.cart.inventoryItemName);

        await expect(inventoryItemName).toContainText(Locators.selectores.cart.productFirstNameText)
    }
}
