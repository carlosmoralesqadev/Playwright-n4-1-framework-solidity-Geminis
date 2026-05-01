import { expect } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class InventoryPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        //*Header
        this.titleProductsText = Locators.inventory.inventoryHeader.titleText;

        //*Filter
        this.productsFilter = page.getByTestId(Locators.inventory.inventoryHeader.productsFilter);
        this.optionNameAToZ = page.getByRole("option", { name: Locators.inventory.filter.optionNameAToZ });
        this.optionNameZToA = page.getByRole("option", { name: Locators.inventory.filter.optionNameZToA });
        this.optionPriceLowToHigh = page.getByRole("option", { name: Locators.inventory.filter.optionPriceLowToHigh });
        this.optionPriceHighToLow = page.getByRole("option", { name: Locators.inventory.filter.optionPriceHighToLow });

        //*Products Containers
        this.inventoryContainer = page.locator(Locators.inventory.productsContainers.inventoryContainer);
        this.internoInventoryContainer = page.getByTestId(Locators.inventory.productsContainers.internoInventoryContainer);
        this.productsList = page.getByTestId(Locators.inventory.productsContainers.productsList);
        this.product = page.getByTestId(Locators.inventory.productsContainers.product);

        //*Img
        this.imgContainer = page.locator(Locators.inventory.img.inventoryItemImgContainer);
        this.img = page.locator(Locators.inventory.img.inventoryitemImg);

        //*Description
        this.descriptionContainer = page.getByTestId(Locators.inventory.description.descriptionContainer);
        this.LabelContainer = page.locator(Locators.inventory.description.LabelContainer);
        this.productName = page.getByTestId(Locators.inventory.description.productName);
        this.productDescription = page.getByTestId(Locators.inventory.description.productDescription);

        //*Price
        this.priceAndBtnContainer = page.locator(Locators.inventory.price.priceAndBtnContainer);
        this.productPrice = page.getByTestId(Locators.inventory.price.productPrice);
        this.btnAddToCart = page.getByRole("button", { name: Locators.inventory.price.btnAddToCart });
        this.btnRemove = page.getByRole("button", { name: Locators.inventory.price.btnRemove });
    }

    async addProduct(indice) {
        await this.btnAddToCart.click();
    }
    async removeProduct(indice) {
        await this.btnRemove.click();
    }
    async gotToCart() {}

    async isPageInventoryOk(titleText) {
        await this.header.verifyUIHeader(titleText);
        const isFilterOk = async () => {
            await expect(this.productsFilter).toBeVisible();
            await expect(this.optionNameAToZ).toBeVisible();
            await expect(this.optionNameZToA).toBeVisible();
            await expect(this.optionPriceLowToHigh).toBeVisible();
            await expect(this.optionPriceHighToLow).toBeVisible();
        };
        const isProductsContainersOk = async () => {
            await expect(this.inventoryContainer).toBeVisible();
            await expect(this.internoInventoryContainer).toBeVisible();
            await expect(this.productsList).toBeVisible();
            await expect(this.product).toHaveCount(6);
        };
        await isFilterOk();
        await isProductsContainersOk();
        await this.footer.isFooterOk();
    }

    async isProductOk() {
        const isImgOk = async () => {
            await expect(this.imgContainer).toBeVisible();
            await expect(this.img).toBeVisible();
        };
        const isDescriptionOk = async () => {
            await expect(this.descriptionContainer).toBeVisible();
            await expect(this.LabelContainer).toBeVisible();
            await expect(this.productName).toBeVisible();
            await expect(this.productDescription).toBeVisible();
        };
        const isPriceOk = async () => {
            await expect(this.priceAndBtnContainer).toBeVisible();
            await expect(this.productPrice).toBeVisible();
            await expect(this.btnAddToCart).toBeVisible();
            await expect(this.btnRemove).not.toBeVisible();
            await this.addProduct();
            await expect(this.btnRemove).toBeVisible();
        };
        await isImgOk();
        await isDescriptionOk();
        await isPriceOk();
    }
}

// add y count in item
// remove
// remove and count
// cart item
// count cart item
