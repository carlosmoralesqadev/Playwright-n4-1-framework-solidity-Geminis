import { expect } from "@playwright/test";
import { interLocators } from "./14_Final_optimizado_locators";

export const hacerLogin = async (page, user, password, statusEsperado) => {
    //*Elementos
    //Boton Login
    const buttonLogin = page.getByRole("button", { name: interLocators.login.buttonLogin });

    //Mensaje login exitoso
    const messageLoginSuccesfull = page.getByText(interLocators.login.messageLoginSuccesfull);

    //Boton logout
    const buttonLogout = page.getByRole("link", { name: interLocators.login.buttonLogout });

    //Mensaje login FALLIDO
    const messageLoginFailed = page.getByText(interLocators.login.messageLoginFailed);

    //Mensaje logout
    const messageLogout = page.getByText(interLocators.login.messageLogout);

    //*Acciones
    await completarFormulario(page, user, password, buttonLogin);

    if (statusEsperado === "logout") {
        await loginExitoso(buttonLogin, buttonLogout, messageLoginSuccesfull);
        await hacerLogout(buttonLogout, buttonLogin, messageLogout);
    } else if (statusEsperado === true) {
        await loginExitoso(buttonLogin, buttonLogout, messageLoginSuccesfull);
    } else if (statusEsperado === false) {
        await loginFailed(buttonLogin, buttonLogout, messageLoginFailed);
    } else {
        console.log("NO ENVIASTE EL PARAMETRO de estatus esperado");
    }
};

const loginExitoso = async (buttonLogin, buttonLogout, messageLoginSuccesfull) => {
    //Validar mensaje de login exitoso
    await expect(messageLoginSuccesfull).toBeVisible();

    //Validar no este visible el boton de Login
    await expect(buttonLogin).not.toBeVisible();

    //Validar este visible el boton de Logout
    await expect(buttonLogout).toBeVisible();
};

const loginFailed = async (buttonLogin, buttonLogout, messageLoginFailed) => {
    //Validar este visible el boton de Login
    await expect(buttonLogin).toBeVisible();

    //Validar NO este visible el boton de Logout
    await expect(buttonLogout).not.toBeVisible();

    //Validar este visible el mensaje de login fallido
    await expect(messageLoginFailed).toBeVisible();
};

const completarFormulario = async (page, user, password, buttonLogin) => {
    //Input userName
    const inputUserName = page.getByLabel(interLocators.login.inputUserName);
    //Input userName
    const inputPassword = page.getByLabel(interLocators.login.inputPassword);

    //*Acciones
    //Ir a la sesscion de login
    await page.getByText(interLocators.login.linkToLogin).click();

    //Localizar y llenar input User Name
    await inputUserName.fill(user);

    //Localizar y llenar input Password
    await inputPassword.fill(password);

    //Localizar y hacer click en el boton de Login
    await buttonLogin.click();
};

const hacerLogout = async (buttonLogout, buttonLogin, messageLogout) => {
    await buttonLogout.click();
    await expect(messageLogout).toBeVisible();
    await expect(buttonLogout).not.toBeVisible();
    await expect(buttonLogin).toBeVisible();
};
