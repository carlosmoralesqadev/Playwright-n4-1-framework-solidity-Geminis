import { test, expect } from "@playwright/test";

test.describe("Pruebas de Componentes", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com");
    });

    test("Autenticaión y atributos", async ({ page }) => {
        await page.getByRole("link", { name: /Form Authentication/i}).click();

        const inputUserName = page.getByRole("textbox", { name: /username/i});
        const inputPassword = page.getByRole("textbox", { name: /password/i});
        const botonLogin = page.getByRole("button", { name: /Login/i});
        const mensajeLogin = page.locator("#flash");
        const linkSelenium = page.getByRole("link", {name: /Elemental Selenium/i});

        await inputUserName.fill("tomsmith");
        await inputPassword.fill("SuperSecretPassword!");
        await botonLogin.click();
        await expect(mensajeLogin).toBeVisible();
        await expect(mensajeLogin).toHaveText(/You logged into a secure area!/i);
        await expect(linkSelenium).toHaveAttribute("href", "http://elementalselenium.com/");
        await expect(linkSelenium).toHaveAttribute("target", "_blank");
    });

    test("Checkbox y Estados", async ({ page }) => {
        const checkBoxes = page.getByRole("link", {name : /Checkboxes/i});
        await checkBoxes.click();
        const checkBoxOne = page.locator(".example").getByRole("checkbox").first();
        const checkBoxTwo = page.locator(".example").getByRole("checkbox").nth(1);
        await expect(checkBoxOne).not.toBeChecked();
        await checkBoxOne.click()
        await checkBoxTwo.click()
        await expect(checkBoxOne).toBeChecked();
        await expect(checkBoxTwo).not.toBeChecked();
    });
});
