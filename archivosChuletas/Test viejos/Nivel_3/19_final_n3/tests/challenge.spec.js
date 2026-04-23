import { test, expect  } from "playwright/test";
import { Locators      } from "../data/data.js";
import { BasePage      } from "../pages/base/BasePage.js";
import { LoginPage     } from "../pages/LoginPage.js";
import { CartPage      } from "../pages/CartPage.js";
import { InventoryPage } from "../pages/InventoryPage.js";

test.describe("Challenge - 18", () => {

    test("E2E", async ({page}) => {
        /** @type {LoginPage } */
        const login = new LoginPage(page);

        /** @type {InventoryPage } */
        const inventory = new InventoryPage(page);

        /** @type {CartPage} */
        const cart = new CartPage(page);


        await login.navegar()
        await login.loginExitoso()


        await inventory.agregarProductoPorIndice(0)
        await inventory.navegarToCartPage()


        await cart.coincideElNombrePorIndice(0)

    })

})