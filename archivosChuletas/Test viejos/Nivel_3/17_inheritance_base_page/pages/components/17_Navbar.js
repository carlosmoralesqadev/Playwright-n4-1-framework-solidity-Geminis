import { expect } from "@playwright/test";

export class NavBarPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.btnLogout = page.getByRole("link", { name: /logout/i });
        this.btnOpenMenu = page.getByRole("button", { name: /Open menu/i });
        this.btnLogin = page.getByTestId("login-button");
    }

    async clickLogout() {
        await this.btnOpenMenu.click();
        await this.btnLogout.click();
        await expect(this.btnLogout).not.toBeVisible();
        await expect(this.btnLogin).toBeVisible();
    }
}
