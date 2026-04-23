import { test, expect } from "@playwright/test";

import { intLocators } from "../../../tests/consolidacion_data_locators.js";
import { goToUrl } from "../../../tests/consolidacion_utils_functions.js";
import { intentarLogin } from "../../../tests/consolidacion_utils_functions.js";

test.describe("Pruebas de seguridad y acceso", () => {
    test.beforeEach(async ({ page }) => {
        await goToUrl(page)
    });
    
    test("login exitoso", async ({ page }) => {
        await intentarLogin(page, intLocators.correctUser, intLocators.correctPassword);
        await expect(page.getByText(intLocators.messageLogin)).toBeVisible();
    });

    test("Login fallido - Username invalid", async ({ page }) => {

        await intentarLogin(page, intLocators.incorrectUser, intLocators.correctPassword)

        await expect(page.getByText(intLocators.messageInvalidLoginUser)).toBeVisible()
    });

    test("Login fallido - Password invalid", async ({ page }) => {

        await intentarLogin(page, intLocators.correctUser, intLocators.incorrectPassword)

        await expect(page.getByText(intLocators.messageInvalidLoginPassword)).toBeVisible()
    });

    


});
