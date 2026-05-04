export const headerLocators = {
    menu: {
        btnMenu: /Open Menu/i, //button
        iconCart: "shopping-cart-link", //data-test
        linkAllItems: /All items/i, //a link
        linkAbout: /About/i, // a link
        linkLogout: /Logout/i, // a link
        linkResetAppState: /Reset App State/i, // a link
    },

    logo: {
        mainTitleElement: ".app_logo",
        mainTitleText: "Swag Labs",
    },

    cart: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
    },

    title: {
        titleElement: "title", //data-test
    },
};