import { test, expect } from "@playwright/test";

test.describe("Validación y deshabilitar", () => {


    test("Habilitar y deshabilitar", async ({page}) => {

        await page.goto("https://the-internet.herokuapp.com/dynamic_controls");

        const inputTextBox = page.locator("#input-example input");
        await expect(inputTextBox).toBeDisabled()

        const actionButton = page.locator("#input-example button")
        await actionButton.click();
        await expect(inputTextBox).toBeEnabled({timeout:10000});

        await expect(actionButton).toHaveText("Disable", { exact : true })
    })
});



/*Ejercicio 7: Estados de Botones Dinámicos

    Archivo: estado_botones.spec.js
    Describe: Validación de Estados
    Test: Habilitar y deshabilitar
    URL: https://the-internet.herokuapp.com/dynamic_controls

    Instrucciones:
        Localiza el input de texto que está debajo de "Enable/disable".
        Valida que inicialmente el input esté deshabilitado (toBeDisabled).
        Haz clic en el botón "Enable".
        Espera (Playwright lo hace solo con la aserción) a que el input esté habilitado (toBeEnabled).
        Valida que el texto del botón haya cambiado a "Disable" usando una coincidencia exacta.*/