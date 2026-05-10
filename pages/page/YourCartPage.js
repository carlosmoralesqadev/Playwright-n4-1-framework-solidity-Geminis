import { expect } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class YourCartPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        this.yourCartTitleTxt = Locators.yourCart.title.titleText
    }

    async isYourCartPageOk(){
        await this.header.verifyUIHeader(this.yourCartTitleTxt)
    }

    async verifyProduct(incide) {}



    async goToFormPersonal() {}


}
