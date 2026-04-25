import { loginLocators       } from "./locators/loginLocators.js";
import { inventoryLocators   } from "./locators/inventoryLocators.js";
import { checkCartLocators   } from "./locators/checkCartLocators.js";
import { payFormLocators     } from "./locators/payFormLocators.js";
import { checkoutOverviewLocators } from "./locators/checkoutOverviewLocators.js"

export const Locators = {
    login: loginLocators,
    inventory: inventoryLocators,
    checkCart: checkCartLocators,
    payForm: payFormLocators,
    checkoutOverview: checkoutOverviewLocators,

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
};
