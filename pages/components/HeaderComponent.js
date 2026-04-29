import { expect } from "@playwright/test";
import { Locators } from "../../data/data.js";

export class HeaderComponent {
    /** @param {import{"@playwright/test"}.Page} page */

    constructor(page) {
        this.page = page;

        //* Menu
        this.btnMenu = page.getByRole("button", { name: Locators.header.menu.btnMenu });

        //* Logo
        this.logo = page.locator(Locators.header.logo.mainTitleElement);
        this.logoText = Locators.header.logo.mainTitleText;

        //* IconCart
        this.iconCart = page.getByTestId(Locators.header.cart.iconCart);

        //* Title
        this.titleElement = page.getByTestId(Locators.header.title.titleElement);
    }

    async verifyUIHeader(titleText) {
        await expect(this.btnMenu).toBeVisible();
        await expect(this.logo).toBeVisible();
        await expect(this.logo).toContainText(this.logoText);
        await expect(this.iconCart).toBeVisible();
        await expect(this.titleElement).toBeVisible();
        await expect(this.titleElement).toContainText(titleText);
    }
}
