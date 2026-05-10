
import { headerLocators           } from "./locators/componentsLocators/headerLocators.js";
import { footerLocators           } from "./locators/componentsLocators/footerLocators.js";
import { loginLocators            } from "./locators/pageLocators/loginLocators.js";
import { inventoryLocators        } from "./locators/pageLocators/inventoryLocators.js";
import { yourCartLocators        } from "./locators/pageLocators/yourCartLocators.js";
import { payFormLocators          } from "./locators/pageLocators/payFormLocators.js";
import { checkoutOverviewLocators } from "./locators/pageLocators/checkoutOverviewLocators.js";


export const Locators = {
    header    : headerLocators,
    footer    : footerLocators,
    login     : loginLocators,
    inventory : inventoryLocators,
    yourCart : yourCartLocators,
    payForm   : payFormLocators,
    checkoutOverview: checkoutOverviewLocators,

    general: {
        url: {
            saucedemo: "https://www.saucedemo.com",
        },
    },
};
