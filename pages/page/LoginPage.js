import { expect   } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class LoginPage extends BasePage {
    /** @param {import ('@playwright/test').Page} page */
    constructor(page) {
        super(page);

        this.userInput = page.getByRole("textbox", { name: Locators.login.inputs.userInput });
        this.passInput = page.getByRole("textbox", { name: Locators.login.inputs.passInput });
        this.btnLogin = page.getByRole("button", { name: Locators.login.inputs.btnLogin });

        this.titleText = Locators.inventory.inventoryHeader.inventoryTitleText;

        this.msgErrorOne = page.getByRole("heading", { name: Locators.login.messages.msgErrorUno });
        this.msgErrorTwo = page.getByRole("heading", { name: Locators.login.messages.msgErrorTwo });
        this.msgErrorThree = page.getByRole("heading", { name: Locators.login.messages.msgErrorThree });
        this.msgErrorFour = page.getByRole("heading", { name: Locators.login.messages.msgLookedOut });
    }

    async hacerLogin({ user = "", pass = "", tipo = "" } = {}) {
        await this.completarFormLogin(user, pass);

        if (tipo === "late") {
            await this.loginLate();
        }else if(tipo === "error_user"){
            await this.resultLoginExitoso();
        }else if (tipo === true) {
            await this.resultLoginExitoso();
        } else if (tipo === false) {
            await this.resultLoginFailed();
        } else if (tipo === "") {
            console.log("------->>>--->>>>>>> Te falto pasar el tipo de login");
        }
    }

    async completarFormLogin(user = "", pass = "") {
        await this.userInput.fill(user);
        await this.passInput.fill(pass);
        await this.btnLogin.click();
    }

    async resultLoginExitoso() {
        await expect(this.header.titleElement).toBeVisible();
        await expect(this.header.titleElement).toContainText(this.titleText);
        await expect(this.btnLogin).not.toBeVisible();
    }

    async resultLoginFailed() {
        const anyError = this.msgErrorOne.or(this.msgErrorTwo).or(this.msgErrorThree).or(this.msgErrorFour);
        await expect(anyError).toBeVisible();
    }

    async loginLate() {
        const startTime = Date.now();

        await expect(this.titleElement).toBeVisible({ timeout: 7000 });

        const duration = Date.now() - startTime;
        console.log("el tipo de espera fue de " + duration )

        if (duration < 2000) {
            throw new Error(`Glitch no detectado: El login tardó solo ${duration}ms`);
        }
        await this.resultLoginExitoso();
    }
}