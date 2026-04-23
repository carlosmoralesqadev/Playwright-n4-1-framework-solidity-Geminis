import { expect } from "@playwright/test";

import { Locators } from "../../data/19_data.js";

export class BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        this.page = page;
    }

    async navegar(url = Locators.url.saucedemo) {
        await this.page.goto(url);
    }

    async esperar(ms) {
        await this.page.waitForTimeout(ms);
    }
}
