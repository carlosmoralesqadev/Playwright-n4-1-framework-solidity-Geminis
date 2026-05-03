import { test, expect  } from "@playwright/test";
import { BasePage      } from "../pages/base/BasePage.js"
import { LoginPage     } from "../pages/page/LoginPage.js";
import { InventoryPage } from "../pages/page/InventoryPage.js"
import { CartPage      } from "../pages/page/CartPage.js";
import { Locators      } from "../data/data.js";

test.describe("Page Login", () => {
    /** @type {LoginPage} */
    /** @type {Inventorypage} */
    /** @type {Cartpage} */

    let login;
    let inventory;
    let cart;

    test.beforeEach(async ({ page }) => {
        login = new LoginPage(page);
        inventory = new InventoryPage(page);
        cart = new CartPage(page);

        await login.navegar();
    });

    test("Login Exitoso - standard_user", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.user, pass: Locators.login.credenciales.pass, tipo: true });
    });
    //* Test exitosos pero con inconvenientes en el performance o flujo
    test("Login performance_glitch_user", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.performance_glitch_user, pass: Locators.login.credenciales.pass, tipo: "late" }); // performance_glitch_user
    });
    test("Login error_user", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.performance_glitch_user, pass: Locators.login.credenciales.pass, tipo: "error_user" });

        //*Validar con las funciones de InventoryPage que el botonAdd deje de funcionar
        //*Validar con las funciones de InventoryPage que el botonAdd deje de funcionar
        //*Validar con las funciones de InventoryPage que el botonAdd deje de funcionar
        //*Validar con las funciones de Otras pages, no cambia bien sus estados
        //*Validar con las funciones de Otras pages, no cambia bien sus estados
        //*Validar con las funciones de Otras pages, no cambia bien sus estados
    });
    test("Login problem_user", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.performance_glitch_user, pass: Locators.login.credenciales.pass, tipo: "error_user" });

        //*Validar con las funciones de InventoryPage - imagenes guales - ver src
        //*Validar con las funciones de InventoryPage - imagenes guales - ver src
        //*Validar con las funciones de InventoryPage - imagenes guales - ver src
        //*Validar con las funciones de InventoryPage - imagenes guales - ver src
        //*Validar con las funciones de InventoryPage - imagenes guales - ver src
    });
    //* Test fallidos por credenciales
    test("Login Failed User Looked", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.looked_out_user, pass: Locators.login.credenciales.pass, tipo: false }); // not macht
    });
    test("Login Failed User Wrong", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.userWrong, pass: Locators.login.credenciales.pass, tipo: false }); // not macht
    });
    test("Login Failed Password Wrong", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.user, pass: Locators.login.credenciales.passWrong, tipo: false }); // not macht
    });
    test("Login Failed User Empty", async ({ page }) => {
        await login.hacerLogin({ user: "", pass: Locators.login.credenciales.pass, tipo: false }); // required user
    });
    test("Login Failed Password Empty", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.user, pass: "", tipo: false }); // required pass
    });
    test("Login Failed Tipo Empty", async ({ page }) => {
        await login.hacerLogin({ user: Locators.login.credenciales.user, pass: Locators.login.credenciales.pass, tipo: "" }); // msg console log
    });
});

