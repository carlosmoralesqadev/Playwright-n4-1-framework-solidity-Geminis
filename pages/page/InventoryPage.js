import { expect } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class InventoryPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.inventoryContainer = page.locator(Locators.inventory.productsContainers.inventoryContainer)
        this.internoInventoryContainer = page.getByTestId(Locators.inventory.productsContainers.internoInventoryContainer);
        this.inventoryList = page.getByTestId(Locators.inventory.productsContainers.inventoryList);
        this.inventoryItem = page.getByTestId(Locators.inventory.productsContainers.inventoryItem);


        this.productName = page.getByTestId(Locators.inventory.productsContainers.products.productName);
        this.btnAddToCart = page.getByTestId(Locators.inventory.productsContainers.products.productName);
        this.btnRemove = page.getByTestId(Locators.inventory.productsContainers.products.productName);
        this.productName = page.getByTestId(Locators.inventory.productsContainers.products.productName);



    }

    async agregarprodcuto(indice) {}

    async gotToCart() {}

    async isPageInventoryOk(titleText) {
        await this.header.verifyUIHeader(titleText);
        await this.footer.isFooterOk()
        await this.isInventoryOk()
    }

    async isInventoryOk(){
        await expect((this.inventoryContainer).first()).toBeVisible()
        await expect(this.internoInventoryContainer).toBeVisible();
        await expect(this.inventoryList).toBeVisible();
        await expect(this.inventoryItem).toHaveCount(6)
    }

    async isProductOk(){
        const product = this.inventoryItem

        await product
    }




}


// nombre de articulos
// add to cart
// add y count in item
// remove
// remove and count
// cart item
// count cart item
