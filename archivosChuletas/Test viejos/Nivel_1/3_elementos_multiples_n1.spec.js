import { test , expect } from "@playwright/test";

test.describe("Gestión de elementos dinamicos", () => {
    test("Crear y eliminar m{ultiples elemnetos", async ({page}) => {
        await page.goto(
            "https://the-internet.herokuapp.com/add_remove_elements/",
        );
        await page.getByRole("button", { name : "Add Element" }).click( { clickCount : 3 })
        await expect(page.getByRole("button", { name : "Delete" })).toHaveCount(3);
        await page.getByRole("button", { name : "Delete"}).nth(1).click();
        await page.getByRole("button", { name : "Delete"}).last().click();
        await expect(page.getByRole("button", { name : "Delete"})).toHaveCount(1)
    })
})

/* Ejercicio 3: Selectores por Índice y Eliminación

Objetivo: Manejar múltiples elementos idénticos.
    Archivo: elementos_multiples.spec.js
    Describe: Gestión de elementos dinámicos
    Test: Crear y eliminar múltiples botones
    URL: https://the-internet.herokuapp.com/add_remove_elements/

    Instrucciones:
        Navegar a la URL.
        Hacer clic 3 veces en el botón "Add Element".
        Validar que ahora existen 3 botones llamados "Delete".
        Eliminar específicamente el segundo botón "Delete" usando su índice.
        Eliminar el último botón "Delete" usando el localizador de posición final.
        Validar que solo queda 1 botón "Delete" en pantalla. */