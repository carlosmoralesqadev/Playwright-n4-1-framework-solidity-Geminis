import { expect   } from "@playwright/test";
import { Locators } from "../data/data.js";
import { BasePage } from "../pages/base/BasePage.js"

export class CartPage extends Basepage{
    /** @param {import('@playwright/test').Page} page */

    constructor(page){
        super(page)
    }

    async verifyProduct(incide){

    }

    async goToFormPersonal(){

    }
}