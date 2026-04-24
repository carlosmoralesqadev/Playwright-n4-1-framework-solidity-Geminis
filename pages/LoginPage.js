import { expect   } from "@playwright/test";
import { Locators } from "../data/data.js";
import { BasePage } from "../pages/base/BasePage.js"

export class LoginPage extends BasePage {
    /** @param {import ('@playwright/test').Page} page */

    constructor(page){
        super(page)
    }
    
    async completarFormLogin(user, pass){
        

    }

    async hacerLoginExitoso(){

    }

    async hacerLoginFailed(){

    }
}