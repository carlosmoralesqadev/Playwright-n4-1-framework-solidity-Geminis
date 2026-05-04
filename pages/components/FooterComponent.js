import { test, expect } from "@playwright/test";
import { Locators } from "../../data/data.js";

export class FooterComponent {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;

        //* Footer
        this.footer = page.getByTestId(Locators.footer.footerElement);

        //* Footer Elements
        this.socialMediaContainer = page.locator(Locators.footer.socialMediaContainer);

        //*Footer SocialsMedia
        this.socialMediaTwitter   = page.getByRole("link", { name: Locators.footer.socialMediaTwitter });
        this.socialMediaFacebook  = page.getByRole("link", { name: Locators.footer.socialMediaFacebook });
        this.socialMediaLinkedIn  = page.getByRole("link", { name: Locators.footer.socialMediaLinkedIn });

        //*Footer Legal
        this.footerLegals = page.getByTestId(Locators.footer.footerLegals);
    }

    async isFooterOk() {
        await expect(this.footer).toBeVisible();
        await this.isAllSocialMedias();
        await this.isFooterLegals();
    }

    async isAllSocialMedias() {
        await expect(this.socialMediaContainer).toBeVisible();
        await expect(this.socialMediaTwitter).toBeVisible();
        await expect(this.socialMediaFacebook).toBeVisible();
        await expect(this.socialMediaLinkedIn).toBeVisible();
    }

    async isFooterLegals() {
        await expect(this.footerLegals).toBeVisible();
        await expect(this.footerLegals).toHaveText(Locators.footer.footerLegalsText);
    }
}
