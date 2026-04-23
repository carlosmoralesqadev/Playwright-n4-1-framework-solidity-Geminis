import { test , expect } from "@playwright/test";

test.describe( "Pruebas de autenticación" , () => {
    test("Login con credenciales validad", async ({page}) => {
        await page.goto("https://the-internet.herokuapp.com/login");
        await page.getByRole("textbox", { name : "Username"}).fill("tomsmith");
        await page.getByRole("textbox", { name : "Password"}).fill("SuperSecretPassword!");
        await page.getByRole("button", { name : "Login" }).click();
        await expect(page.getByText("You logged into a secure area!")).toBeVisible();
        await expect(page.getByRole("link", { name : "Logout"})).toBeVisible()
    })
})

/* Ejercicio 1: El Validador de Login (Básico)
Objetivo: Interactuar con inputs de texto y botones de formulario.

    Archivo: login_basico.spec.js
    Describe: Pruebas de Autenticación
    Test: Login con credenciales válidas
    URL: https://the-internet.herokuapp.com/login

    Instrucciones:

        Navegar a la URL.
        Ingresar el usuario: tomsmith
        Ingresar la contraseña: SuperSecretPassword!
        Hacer clic en el botón de Login (usa getByRole).
        Validar que aparezca un mensaje de éxito que contenga el texto "You logged into a secure area!".
        Validar que el botón de "Logout" sea visible. */