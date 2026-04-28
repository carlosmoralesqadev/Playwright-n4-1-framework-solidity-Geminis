import { test, expect } from "@playwright/test";
import { Locators } from "../../data/data.js"


export class FooterComponent {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;

        //* Footer
        this.footer = page.getByTestId(Locators.footer.footerElement);

        //* Footer Elements
        this.socialMediaContainer = page.locator(".social");

        //*Footer SocialsMedia
        this.socialMediaTwitter    = page.getByRole("link", {name : Locators.footer.socialMediaTwitter});
        this.socialMediaFacebook   = page.getByRole("link", {name : Locators.footer.socialMediaFacebook});
        this.socialMediaLinkedIn  = page.getByRole("link", {name : Locators.footer.socialMediaLinkedIn});
    }

    async isFooterOk(){
        await this.isFooter();
        await this.isSocialMediaContainer();
        await this.isAllSocialMedias()
    }

    async isFooter() {
        await expect(this.footer).toBeVisible();
    }
    async isSocialMediaContainer() {
        await expect(this.socialMediaContainer).toBeVisible();
    }
    async isAllSocialMedias(){
        await this.isSocialMediaFacebook();
        await this.isSocialMediaFacebook();
        await this.isSocialMediaLinkedIn();
    }
    async isSocialMediaTwiter(){
        await expect(this.socialMediaTwitter).toBeVisible()
    }
    async isSocialMediaFacebook(){
        await expect(this.socialMediaFacebook).toBeVisible()
    }
    async isSocialMediaLinkedIn(){
        await expect(this.socialMediaLinkedIn).toBeVisible()
    }
}