import { test, expect    } from "@playwright/test";
import { HeaderComponent } from "../components/HeaderComponent.js"
import { FooterComponent } from "../components/FooterComponent.js";
import { Locators        } from "../../data/data.js";

export class BasePage {
    /** @param {import('@playwright/test').Page } page */

    constructor(page) {
        //* Page
        this.page = page;

        this.header = new HeaderComponent(page)
        this.footer = new FooterComponent(page);

        //* Footer
        
    }

    async navegar(url = Locators.general.url.saucedemo) {
        await this.page.goto(url);
    }

    async esperar(ms) {
        await this.page.waitForTimeout(ms);
    }
}
