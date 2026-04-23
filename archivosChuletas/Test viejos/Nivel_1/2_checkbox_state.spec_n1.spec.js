import { test, expect } from "@playwright/test";

test.describe("Interacción con Form-Controls", () => {
    test("Seleccionar y deseleccionar checkboxes - con locator", async ({
        page,
    }) => {
        await page.goto("https://the-internet.herokuapp.com/checkboxes");

        //Asegurarse de que el primer checkbox no esté marcado inicialmente.
        await expect(
            page.locator('input[type="checkbox"]').nth(0),
        ).not.toBeChecked();

        //Marcar el primer checkbox.
        await page.locator('input[type="checkbox"]').nth(0).click();

        // Desmarcar el segundo checkbox (que viene marcado por defecto).
        await page.locator('input[type="checkbox"]').nth(1).click();

        //Validar con aserciones que el primero esté Checked y el segundo not.toBeChecked.
        await expect(
            page.locator('input[type="checkbox"]').nth(0),
        ).toBeChecked();

        await expect(
            page.locator('input[type="checkbox"]').nth(1),
        ).not.toBeChecked();
    });

    test("Seleccionar y deseleccionar checkboxes - con getByRole", async ({
        page,
    }) => {
        await page.goto("https://the-internet.herokuapp.com/checkboxes");

        // Asegurarse de que el primer checkbox no esté marcado inicialmente.
        await expect(page.getByRole("checkbox").nth(0)).not.toBeChecked();

        // Marcar el primer checkbox.
        await page.getByRole("checkbox").nth(0).click();

        // Desmarcar el segundo checkbox (que viene marcado por defecto).
        await page.getByRole("checkbox").nth(1).click();

        // Validar con aserciones que el primero esté Checked y el segundo not.toBeChecked.
        await expect(page.getByRole("checkbox").nth(0)).toBeChecked();

        await expect(page.getByRole("checkbox").nth(1)).not.toBeChecked();
    });
});


/*Ejercicio 2: Interacción con Checkboxes y Estados

Objetivo: Validar si elementos están marcados o no.
    Archivo: checkbox_state.spec.js
    Describe: Interacción con Form-Controls
    Test: Seleccionar y deseleccionar checkboxes
    URL: https://the-internet.herokuapp.com/checkboxes

    Instrucciones:
        Navegar a la URL.
        Asegurarse de que el primer checkbox no esté marcado inicialmente.
        Marcar el primer checkbox.
        Desmarcar el segundo checkbox (que viene marcado por defecto).
        Validar con aserciones que el primero esté Checked y el segundo not.toBeChecked. */