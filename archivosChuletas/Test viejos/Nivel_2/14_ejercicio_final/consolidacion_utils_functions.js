import { test, expect } from "@playwright/test";

import { intLocators } from "./consolidacion_data_locators.js";

export const goToUrl = async (page) => {
    await page.goto(intLocators.url);
}

export const intentarLogin = async (page , user, password) => {
    await page.getByLabel(intLocators.userInput).fill(user);

    await page.getByLabel(intLocators.passwordInput).fill(password);

    await page.getByRole("button", { name: intLocators.loginButton }).click();
};
