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
        this.productsFilter       = page.getByTestId(Locators.inventory.filter.productsFilter);

        //*Products Containers
        this.inventoryContainer        = page.locator(Locators.inventory.productsContainers.inventoryContainer);
        this.internoInventoryContainer = page.getByTestId(Locators.inventory.productsContainers.internoInventoryContainer);
        this.productsList              = page.getByTestId(Locators.inventory.productsContainers.productsList);
        this.product                   = page.getByTestId(Locators.inventory.productsContainers.product);

        //*Img
        this.imgContainer = Locators.inventory.img.inventoryItemImgContainer;
        this.img          = Locators.inventory.img.inventoryitemImg;

        //*Description
        this.descriptionContainer = Locators.inventory.description.descriptionContainer;
        this.LabelContainer       = Locators.inventory.description.LabelContainer;
        this.productName          = Locators.inventory.description.productName;
        this.productDescription   = Locators.inventory.description.productDescription;

        //*Price
        this.priceAndBtnContainer = Locators.inventory.price.priceAndBtnContainer;
        this.productPrice         = Locators.inventory.price.productPrice;
        this.btnAddToCart         = page.getByRole("button", { name: Locators.inventory.price.btnAddToCart });
        this.btnRemove            = page.getByRole("button", { name: Locators.inventory.price.btnRemove });
    }

    async addProduct(indice) {
        await this.btnAddToCart.nth().click();
    }
    async removeProduct(indice) {
        await this.btnRemove.nth().click();
    }
    async gotToCart() {}

    async isInventoryPageOk(titleText) {
        await this.header.verifyUIHeader(titleText);
        const isFilterOk = async () => {
            await expect(this.productsFilter).toBeVisible();
            await this.productsFilter.click();

            await this.productsFilter.selectOption("az");
            await expect(this.productsFilter).toHaveValue("az");

            await this.productsFilter.selectOption("za");
            await expect(this.productsFilter).toHaveValue("za");

            await this.productsFilter.selectOption("lohi");
            await expect(this.productsFilter).toHaveValue("lohi");
            
            await this.productsFilter.selectOption("hilo");
            await expect(this.productsFilter).toHaveValue("hilo");

        };
        const isProductsContainersOk = async () => {
            await expect((this.inventoryContainer).first()).toBeVisible();
            await expect(this.internoInventoryContainer).toBeVisible();
            await expect(this.productsList).toBeVisible();


            const totalProducts = await this.product.count();

            for(let i = 0; i < totalProducts ; i++){
                await this.isProductOk(i)
            }
        };
        await isFilterOk();
        await isProductsContainersOk();
        await this.footer.isFooterOk();
    }

    async isProductOk(indice) {

        const product = this.product.nth(indice);

        const isImgOk = async () => {
            await expect(product.locator(this.imgContainer)).toBeVisible();
            await expect(product.locator(this.img)).toBeVisible();
        };

        const isDescriptionOk = async () => {
            await expect(product.locator(this.descriptionContainer)).toBeVisible();
            await expect(product.locator(this.LabelContainer)).toBeVisible();
            await expect(product.locator(this.productName)).toBeVisible();
            await expect(product.locator(this.productDescription)).toBeVisible();
        };

        const isPriceOk = async () => {
            await expect(product.locator(this.priceAndBtnContainer)).toBeVisible();
            await expect(product.locator(this.productPrice)).toBeVisible();

            const btnAdd = product.getByRole("button", {
                name: Locators.inventory.price.btnAddToCart,
            });

            const btnRemove = product.getByRole("button", {
                name: Locators.inventory.price.btnRemove,
            });

            await expect(btnAdd).toBeVisible();
            await expect(btnRemove).not.toBeVisible();

            await btnAdd.click();

            await expect(btnRemove).toBeVisible();
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
