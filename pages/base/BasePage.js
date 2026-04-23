import { expect   } from "@playwright/test";
import { Locators } from "../../data/data.js"


export class BasePage {

    /** @param {import('@playwright/test').Page } page */

    contructor(page){
        this.page = page
    }

    async navegar(url = xx){ //*XXXxXXXXXXXXXxxxxxxx
        await this.page.goto(url)
    }

    async esperar(ms){
        await this.page.waitForTimeout(ms)
    }
}