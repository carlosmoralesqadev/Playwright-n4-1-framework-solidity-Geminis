import { expect   } from "@playwright/test";
import { Locators } from "../data/17_testData.js";
import { NavBarPage } from "./components/17_Navbar.js";

export class ProductsPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        /** @type {NavBarPage} */ // <--- Indica el tipo del componente
        this.navbarSection = new NavBarPage(page);
    }
}
