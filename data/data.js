import { headerLocators } from "./locators/headerLocators.js"
import { loginLocators       } from "./locators/loginLocators.js";
import { inventoryLocators   } from "./locators/inventoryLocators.js";
import { checkCartLocators   } from "./locators/checkCartLocators.js";
import { payFormLocators     } from "./locators/payFormLocators.js";
import { checkoutOverviewLocators } from "./locators/checkoutOverviewLocators.js";

export const Locators = {
    login: loginLocators,
    inventory: inventoryLocators,
    checkCart: checkCartLocators,
    payForm: payFormLocators,
    checkoutOverview: checkoutOverviewLocators,
    header: headerLocators,

    general: {
        url: {
            saucedemo: "https://www.saucedemo.com",
        },
    },
};
