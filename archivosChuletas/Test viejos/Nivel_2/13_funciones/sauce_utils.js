import { sauceLocators } from "./sauce_data.js";

export const realizarLogin = async ( page ) => {
    await page.goto(sauceLocators.page);

    //Login
    await page.getByRole("textbox", { name: sauceLocators.inputUsuario }).fill(sauceLocators.userName);
    await page.getByRole("textbox", { name: sauceLocators.inputPassword }).fill(sauceLocators.userPassword);
    await page.getByRole("button", { name: sauceLocators.buttonLogin }).click();
};
