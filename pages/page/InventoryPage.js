import { expect } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class InventoryPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);
    }

    async isList() {}

    async agregarprodcuto(indice) {}

    async gotToCart() {}

    async isPageInventoryOk() {
        await this.header.verifyUIHeader();

        await expect(this.header.titleElement).toContainText(Locators.inventory.inventoryHeader.titleText);

        await this.footer.isFooterOk()
    }
}

//  titulo
// lista
// cantidad articulos
// nombre de articulos
// add to cart
// add y count in item
// remove
// remove and count
// cart item
// count cart item
