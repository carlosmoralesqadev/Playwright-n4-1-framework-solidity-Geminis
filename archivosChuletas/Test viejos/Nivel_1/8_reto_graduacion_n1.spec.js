import { test, expect } from "@playwright/test";

test.describe("Flujoi de compra E2E - ", () => {
    test("Comprar Mochila y Linterna Exitosamente", async ({ page }) => {
        await page.goto("https://www.saucedemo.com/");

        //login
        await page
            .getByRole("textbox", { name: "Username", exact: true })
            .fill("standard_user");
        await page
            .getByRole("textbox", { name: "Password", exact: true })
            .fill("secret_sauce");
        await page.getByRole("button", { name: "Login", exact: true }).click();

        //Selección Precisa
        await page
            .locator(".inventory_item")
            .filter({ hasText: "Sauce Labs Backpack", exact: true })
            .getByRole("button", { name: "Add to cart", exact: true })
            .click();

        await page
            .locator(".inventory_item")
            .filter({ hasText: "Sauce Labs Bike Light" })
            .getByRole("button", { name: "Add to cart", exact: true })
            .click();

        //Validar carrito
        const iconoCarrito = page.locator("[data-test = 'shopping-cart-badge']");
        await expect(iconoCarrito).toHaveText("2");
        await iconoCarrito.click()

        await expect(
            page.locator(".cart_item").nth(0).locator(".inventory_item_name"),
        ).toHaveText("Sauce Labs Backpack");
        await expect(
            page.locator(".cart_item").nth(1).locator(".inventory_item_name"),
        ).toHaveText("Sauce Labs Bike Light");

        //Confirmar Carrito
        await page.getByRole("button", {name : "Checkout", exact : true}).click()

        //completar datos para compra
        await page.locator("#first-name").fill("Carlos")
        await page.locator("#last-name").fill("Morales")
        await page.locator("#postal-code").fill("1424")
        await page.getByRole("button", {name : "Continue", exact : true}).click()
        await page.getByRole("button", {name : "Finish", exact : true}).click()

        //Mensaje final
        await expect(page.locator(".complete-header")).toHaveText(
            "Thank you for your order!",
        );

    });
});
