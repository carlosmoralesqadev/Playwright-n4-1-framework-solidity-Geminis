import { test, expect } from "@playwright/test";

test.describe("Interacciones Dinámicas - Nivel 2", () => {
    test.beforeEach(async ({ page }) => {
        await page.goto("https://the-internet.herokuapp.com/");
    });

    test("Add/Remove Elements", async ({ page }) => {
        const botonAddElement = page.getByRole("button", {
            name: /Add Element/i,
        });

        const botonDeleteElement = page.getByRole("button", {
            name: /Delete/i,
        });

        const seccionAddRemove = page.locator("#content").getByRole("link").nth(1);

        //Ir a la seccion seccionAddRemoveElement
        await seccionAddRemove.click();

        //Hacer 3 click en Add Element 
        for (let i = 0; i < 3; i++) {
            await botonAddElement.click();
        }
        // await botonAddElement.click({ clickCount: 3 });

        //hacer click en el segundo delete
        await botonDeleteElement.nth(1).click();
        
        //hacer click en el ultimo delete
        await botonDeleteElement.last().click();

        //Verificar que solo queda un delete    
        await expect(botonDeleteElement).toHaveCount(1);
    });

    test("Hovers", async ({page}) => {
        const seccionHovers = page.locator("#content").getByRole("link", {name: /hovers/i});
        await seccionHovers.click();

        const imagenUno     = page.getByRole("img", {name: /user avatar/i }).first()
        const imagenDos        = page.getByRole("img", {name: /user avatar/i }).nth(1)
        const imagenUltima     = page.getByRole("img", {name: /user avatar/i }).last()
        
        const nameImagenUno = page.getByRole("heading", { name: /name: user1/i , level : 5 });
        const nameImagenUltima = page.getByRole("heading", { name: /name: user3/i, level :5 });


        //Hover sobre la imagen uno
        await imagenUno.hover()
        //Se ve el nombre del usuario
        await expect(nameImagenUno).toBeVisible()
        
        
        //Hover sobre la imagen ultima
        await imagenUltima.hover()
        //Se ve el nombre del usuario ultimo
        await expect(nameImagenUltima).toBeVisible()
        
        //No Se ve el nombre del usuario
        await expect(nameImagenUno).not.toBeVisible()
    })

    test("Key Press", async ({page}) => {
        const seccionKeyPress = page.getByRole("link", { name: /Key Presses/i });
        await seccionKeyPress.click();

        const elInput = page.locator(".example input")
        const youEntered = page.locator("#result")
        
        await elInput.pressSequentially("PLAYWRIGHT");
        await expect(youEntered).toContainText(/You entered: T/i);

        await elInput.press("Backspace");
        await expect(youEntered).toHaveText(/You entered: BACK_SPACE/i);
    })

    test("Dynamic Controls", async ({page}) => {
        const seccionDynamicControl = page.getByRole("link", { name: /Dynamic Controls/i });
        await seccionDynamicControl.click();

        const input = page.locator("#input-example input");
        await expect(input).toBeDisabled();

        const botonDisable = page.getByRole("button", { name: /Enable/i });
        const botonEnable = page.getByRole("button", { name: /Disable/i });

        await botonDisable.click();
        await expect(input).toBeEnabled({ timeout: 10000 });


    })
});
