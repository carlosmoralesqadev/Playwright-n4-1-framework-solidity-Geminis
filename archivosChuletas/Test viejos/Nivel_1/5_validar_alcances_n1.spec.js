import { test , expect } from "@playwright/test";

test.describe("Aserciones de atributos", () => {

    test("Verificar redirección de elemento Selenium", async  ({page}) => {
        
        await page.goto("https://the-internet.herokuapp.com/");

        const seleniumLink = page.getByRole("link", { name : "Elemental Selenium" , exact :true });

        await expect(seleniumLink).toBeVisible()

        await expect(seleniumLink).toHaveAttribute("href", "http://elementalselenium.com/");

        await expect(seleniumLink).toHaveAttribute("target", "_blank")
        
    })

    test("Verificar redirección de elemento Selenium - 2", async ({page}) => {

        await page.goto("https://the-internet.herokuapp.com/");
        const seleniumLink2 = page.getByRole("link", {name : "Elemental Selenium", exact : true });
        await expect(seleniumLink2).toHaveAttribute("href", "http://elementalselenium.com/");
        await expect(seleniumLink2).toHaveAttribute("target", { name : "_blank" , exact : true })
    })
})

/*Ejercicio 5: El Inspector de Enlaces

    Archivo: validar_enlaces.spec.js
    Describe: Aserciones de Atributos
    Test: Verificar redirección de Elemental Selenium
    URL: https://the-internet.herokuapp.com/

    Instrucciones:
        Localiza el enlace que dice "Elemental Selenium" en el footer.
        Valida que el atributo href sea exactamente http://elementalselenium.com/.
        Valida que el atributo target sea _blank (esto indica que se abre en pestaña nueva). */