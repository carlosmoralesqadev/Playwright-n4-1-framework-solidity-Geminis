export const loginLocators = {
    credenciales: {
        user: "standard_user",
        pass: "secret_sauce",
        userWrong: "standard_userxxx",
        passWrong: "secret_saucexxx",
    },

    inputs: {
        loginBox: "login-box", //class
        userInput: /Username/i, //role
        passInput: /Password/i, //role
        btnLogin: /Login/i, //role
    },

    messages: {
        msgErrorUno: /Epic sadface: Username and password do not match any user in this service/i,
        msgErrorTwo: /Epic sadface: Username is required/i,
        msgErrorThree: /Epic sadface: Password is required/i,
        msgLookedOut: /Epic sadface: Sorry, this user has been locked out./i,
    },

    credentialsContainer: {
        loginCredentialsContainer: "login-credentials-container", //Ddata-test
        standarUser: "standard_user",
        lockedOutUser: "locked_out_user",
        problemUser: "problem_user", //* ENTRA PERO LAS IMAGENES DE PERROS
        performanceGlitchUser: "performance_glitch_user", //*Entra y no se cual es el problema
        errorUser: "error_user", //*Entra y no se cual es el problema
        visualUser: "visual_user", //*Entra y el problema parece ser el carrito
    },
};
