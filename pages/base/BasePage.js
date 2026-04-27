import { test, expect } from "@playwright/test";
import { Locators } from "../../data/data.js";

export class BasePage {
    /** @param {import('@playwright/test').Page } page */

    constructor(page) {
        //* Page
        this.page = page;

        //* Menu
        this.btnMenu = page.getByRole("button", { name: Locators.header.menu.btnMenu });

        //* Logo
        this.logo = page.locator(Locators.header.logo.mainTitleElement);
        this.logoText = Locators.header.logo.mainTitleText;

        //* IconCart
        this.iconCart = page.getByTestId(Locators.header.cart.iconCart);

        //* Title   
        this.titleElement = page.getByTestId(Locators.header.title.titleElement)
    }

    async navegar(url = Locators.general.url.saucedemo) {
        await this.page.goto(url);
    }

    async esperar(ms) {
        await this.page.waitForTimeout(ms);
    }

    async verifyUIHeader() {
        await expect(this.btnMenu).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.logo).toContainText(this.logoText);
        await expect(this.iconCart).toBeVisible();
    }
}
