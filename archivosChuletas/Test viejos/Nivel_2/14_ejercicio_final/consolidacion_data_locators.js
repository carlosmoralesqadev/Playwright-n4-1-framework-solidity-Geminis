
export const intLocators = {
    url: "https://the-internet.herokuapp.com/login",

    //Login
    userInput: /Username/i, //bylabel
    passwordInput: /Password/i, //bylabel
    loginButton: /Login/i, //bytext

    correctUser: "tomsmith",
    correctPassword: "SuperSecretPassword!",

    incorrectUser: "xxxxtomsmit",
    incorrectPassword: "xxxxSuperSecretPassword!",

    messageLogin: /you logged into a secure area/i,
    messageInvalidLoginUser: /Your username is invalid!/i,
    messageInvalidLoginPassword: /Your password is invalid!/i,
};