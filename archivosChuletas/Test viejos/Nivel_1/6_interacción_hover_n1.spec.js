import { test , expect } from "@playwright/test";

test.describe("Interacciones de Mouse", () => {
    test("Relevar información oculta", async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/hovers");
        await page.getByRole("img", { name: "User Avatar" , exact : true}).nth(0).hover();
        await expect(page.getByRole("heading", { name : "name: user1" , exact : true })).toBeVisible();
        await page.getByRole("img", {name: "User Avatar", exact : true }).last().hover();
        await expect(page.getByRole("heading", {name : "name: user3", exact : true})).toBeVisible();
        await expect(page.getByRole("heading", {name : "name: user2", exact : true})).not.toBeVisible();
    })
})

/* Ejercicio 6: Dominando el Hover
    Archivo: interaccion_hover.spec.js
    Describe: Interacciones de Mouse
    Test: Revelar información oculta
    URL: https://the-internet.herokuapp.com/hovers

    Instrucciones:
        Hay 3 avatares (imágenes de usuarios). Haz hover sobre el primer usuario (index 0).
        Al hacer hover, aparecerá un texto con el nombre del usuario ("name: user1"). Valida que ese texto sea visible.
        Haz hover sobre el tercer usuario y valida que su nombre ("name: user3") sea visible.
        Valida que el nombre del segundo usuario no sea visible mientras tienes el mouse sobre el tercero. */