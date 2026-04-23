import { test, expect } from "@playwright/test";

test.describe(" Eventos de teclado ", () => {
    test("Escribir secuencia y validad captura", async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/key_presses");
        await page.locator("input[type='text']").click();
        await page.locator("input[type='text']").pressSequentially("PLAYWRIGHT");
        await expect(page.locator("p#result")).toHaveText("You entered: T");
        await page.locator("input[type='text']").press("Escape")
        await expect(page.locator("p#result")).toHaveText("You entered: ESCAPE");
    })
})

/*Ejercicio 4: Teclado y Resultados en Tiempo Real

Objetivo: Simular escritura real y capturar cambios en el DOM.
    Archivo: teclado_pro.spec.js
    Describe: Eventos de Teclado
    Test: Escribir secuencia y validar captura
    URL: https://the-internet.herokuapp.com/key_presses

    Instrucciones:
        Navegar a la URL.
        Hacer clic en el input para darle foco.
        Escribir la palabra "PLAYWRIGHT" tecla por tecla (secuencialmente).
        Validar que el texto de resultado debajo del input diga exactamente: "You entered: T" (que es la última letra).
        Presionar la tecla "Escape" (puedes usar el nombre de la tecla en el método de presión).
        Validar que el resultado cambie a: "You entered: ESCAPE".*/