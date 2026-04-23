import { test, expect } from "@playwright/test";

test.describe("Tienda Online - Refactorizada", () => {

    test.beforeEach(async ({ page }) => {

        //Login
        await page.goto("https://www.saucedemo.com/");
        await page.getByRole("textbox", { name: /username/i }).fill("standard_user");
        await page.getByRole("textbox", { name: /password/i }).fill("secret_sauce");
        await page.locator("#login-button").click();
    });

    //Estar en la tienda
    test("Entramos en la tienda", async ({ page }) => {
        await expect(page.getByText("Products", {exact : true })).toHaveText("Products");
    });

    test("Agregar productos", async ({page}) => {

        const contenedorMochila = page
            .locator(".inventory_item")
            .filter({ hasText: /Sauce Labs Backpack/i });

        const contenedorLinterna = page
            .locator(".inventory_item")
            .filter({ hasText: /Sauce Labs Bike Light/i });

        const botonAddToCart = { name: /Add to cart/i };
        const carritoIcono = page.locator(".shopping_cart_badge");

        await contenedorMochila.getByRole("button", botonAddToCart ).click();
        await contenedorLinterna.getByRole("button", botonAddToCart ).click();
        await expect(carritoIcono).toHaveText("2")

        await carritoIcono.click()

        await page.getByRole("button", {name : /Checkout/i}).click()
        
        await page.getByRole("textbox", {name: /First Name/i}).fill("Carlos");
        await page.getByRole("textbox", {name: /Last Name/i}).fill("Morales");
        await page.getByRole("textbox", {name: /Postal code/i}).fill("1424");
        //await page.getByPlaceholder(/First Name/i).fill("Carlos");
        //await page.getByPlaceholder(/Last Name/i).fill("Morales");
        //await page.getByPlaceholder(/Postal code/i).fill("1424");
        
        await page.getByRole("button", {name: /Continue/i}).click()
        await page.getByRole("button", {name: /Finish/i}).click()

        await expect (page.getByRole("heading", {name: /Thank you for your order!/i, level:2})).toHaveText("Thank you for your order!")
        await expect (page.getByRole("heading", {name: /Thank you for your order!/i, level:2})).toBeVisible("Thank you for your order!")

    
    })
});

/*Usa un test.beforeEach para entrar a la URL y hacer el Login. Así, el cuerpo de tu test empezará directamente en la tienda.

Dentro del test, crea constantes para los elementos que vas a usar (por ejemplo: const cartBadge = page.locator('.shopping_cart_badge')).

Usa Regex (/.../i) en todos tus getByRole y getByText.

Realiza el mismo flujo de compra de la mochila, pero ahora el código debe verse mucho más corto y legible. */
