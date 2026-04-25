export const Locators = {
    general: {
        url: {
            saucedemo: "https://www.saucedemo.com",
        },

        header: {
            menu: {
                menu: /Open Menu/i, //button
                iconCart: "shopping-cart-link", //data-test
                linkAllItems: /All items/i, //a link
                linkAbout: /About/i, // a link
                linkLogout: /Logout/i, // a link
                linkResetAppState: /Reset App State/i, // a link
            },

            logo: {
                mainTitle: /Swag Labs/i,
            },

            cart: {
                iconCart: "shopping-cart-link", //data-test
                countIconCart: "shopping-cart-badge", //data-test
            },
        },
    },

    pageLogin: {
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
        },

        credentialsContainer: {
            loginCredentialsContainer: "login-credentials-container", //Ddata-test
            standarUserText: /standard_user/i,
            pass: "secret_sauce",
        },
    },

    pageInventory: {
        inventoryContainer: "inventory_container", // locator id
        intInventoryContainer: "inventory-container", // data-test
        inventoryList: "inventory-list", //data-test
        inventoryItem: "inventory-item", //data-test

        title: "title", //data-test
        titleText: /Products/i,
        productsList: "inventory-list", //data-test
        containerProduct: "inventory-item", //data-test
        nameProduct: "inventory-item-name", //data-test
        btnAddToCart: /Add To Cart/i,
        btnRemove: /Remove/i,
    },

    cart: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
        title: "title", //data-test
        titleText: /Your Cart/i,
        inventoryItem: "inventory-item", //data-test
        inventoryItemName: "inventory-item-name", //data-test
        btnCheckout: /Checkout/i,
        btnReturnInventory: /Continue Shopping/i,
    },

    pagePayForm: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
        title: "title", //data-test
        titleText: /Checkout: Your Information/i,
        inputFirstName: /First Name/i,
        inputLastName: /Last Name/i,
        inputPostalCode: / Zip\/Postal Code /i,
        btnReturnCart: /Cancel/i,
        btnContinueToCheckoutOverview: /Continue/i,
        msgErrorEmptyFirstName: /Error: First Name is required/i,
        msgErrorEmptyLasttName: /Error: Last Name is required/i,
        msgErrorEmptyPostalCode: /Error: Postal Code is required/i,
    },

    pageCheckoutOverview: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
        title: "title", //data-test
        titleText: /Checkout: Overview/i,
        cartList: "cart-list", //data-test
        inventoryItem: "inventory-item", //data-test
        btnFinish: /Finish/i,
    },
};
