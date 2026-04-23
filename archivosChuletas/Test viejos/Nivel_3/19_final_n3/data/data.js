export const Locators = {
    url: {
        saucedemo: "https://www.saucedemo.com",
    },

    credenciales: {
        userName: "standard_user",
        userPass: "secret_sauce",
    },

    selectores: {
        general: {
            title: "title" /*data-id*/,
        },

        login: {
            nameInput: /Username/i /*Role*/,
            passInput: /Password/i /*Role*/,
            btnLogin: /Login/i /*Role*/,
        },

        inventory: {
            productContainer: "inventory-item" /*data-id*/,
            btnAddToCart: /Add to cart/i /*Role*/,
            iconCart: "shopping-cart-link" /*data-id*/,
            titleTextInventory: /Products/i,
        },

        cart: {
            titleTextCart: /Your Cart/i,
            inventoryItem: "inventory-item",
            inventoryItemName: "inventory-item-name" /*data-id*/,
            productFirstNameText: /Sauce Labs Backpack/i,
        },
    },
};
