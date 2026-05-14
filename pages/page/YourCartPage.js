import { expect } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class YourCartPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.yourCartTitleTxt = Locators.yourCart.title.titleText;

        //*Contenedores
        this.cartContentsContainer = page.getByTestId(Locators.yourCart.cartContainers.cartContentsContainer);
        this.divIntermedioCartContentsContainer = this.cartContentsContainer.first();
        this.cartList = page.getByTestId(Locators.yourCart.cartContainers.cartList);
        this.qtyLabel  = page.getByTestId(Locators.yourCart.cartContainers.qtyLabel);
        this.descLabel = page.getByTestId(Locators.yourCart.cartContainers.descLabel);


        //*Item
        this.itemNameLink = page.locator(Locators.yourCart.product.itemNameLink)
        this.itemName = page.getByTestId(Locators.yourCart.product.inventoryItemName);
        this.ItemDesc = page.getByTestId(Locators.yourCart.product.ItemDesc);
        this.itemPricebar = page.getByTestId(Locators.yourCart.product.itemPricebar);
        this.itemPrice = page.getByTestId(Locators.yourCart.product.itemPrice);
        this.btnAddToCart = page.getByRole(Locators.yourCart.product.btnAddToCart)
        this.btnRemove = page.getByRole(Locators.yourCart.product.btnRemove);






    }

    async isYourCartPageOk(){
        await this.header.verifyUIHeader(this.yourCartTitleTxt)
    }

    async verifyProduct(incide) {}



    async goToFormPersonal() {}


}
