
export const Locators = {
    url: {
        saucedemo: "https://www.saucedemo.com",
    },
    credenciales: {
        user: "standard_user",
        pass: "secret_sauce",
        userWrong: "standard_userxxx",
        passWrong: "secret_saucexxx",
    },
    login: {
        userInput: /Username/i,
        passInput: /Password/i,
        btnLogin: /Login/i,

        msgErrorUno: /Epic sadface: Username and password do not match any user in this service/i,
        msgErrorTwo: /Epic sadface: Username is required/i,
        msgErrorThree: /Epic sadface: Password is required/i,
    },
    inventory: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
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
    payForm: {
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
    checkoutOverview: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
        title: "title", //data-test
        titleText: /Checkout: Overview/i,
        cartList: "cart-list", //data-test
        inventoryItem: "inventory-item", //data-test
        btnFinish: /Finish/i,
    },
};