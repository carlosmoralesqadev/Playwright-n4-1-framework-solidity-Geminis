import { test, expect  } from "@playwright/test";
import { LoginPage     } from "../pages/page/LoginPage";
import { InventoryPage } from "../pages/page/InventoryPage";
import { Locators      } from "../data/data.js";


test.describe("Page Inventory", () => {

    /** @type {LoginPage} */
    /** @type {InventoryPage} */
    /** @type {CartPage} */

    let login;
    let inventory;
    let cart;

    test.beforeEach( async ({page}) => {
        login     = new LoginPage(page);
        inventory = new InventoryPage(page);

        await login.navegar();
        await login.hacerLogin({ user : Locators.login.credenciales.user, pass : Locators.login.credenciales.pass, tipo: true})
    })

    test.only("Inventory Page", async ({page}) => {
        await inventory.isInventoryPageOk(Locators.inventory.inventoryHeader.titleText);
    })
})

