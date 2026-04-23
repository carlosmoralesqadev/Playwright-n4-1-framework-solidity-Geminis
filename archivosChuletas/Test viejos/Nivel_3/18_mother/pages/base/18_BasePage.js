import { expect } from "@playwright/test";
import { Locators } from "../../data/18_testData.js";

export class BasePage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
    }

    async navegar(url = Locators.url) {
        await this.page.goto(url);
    }

    async esperar(ms) {
        await this.page.waitForTimeout(ms);
    }
}
