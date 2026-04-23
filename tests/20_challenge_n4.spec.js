import { test, expect  } from "@playwright/test";
import { BasePage      } from "../pages/base/BasePage.js"
import { LoginPage     } from "../pages/LoginPage.js";
import { InventoryPage } from "../pages/InventoryPage.js"
import { CartPage      } from "../pages/CartPage.js";

test.describe("Challenge", () => {
    test("Login", async ({ page }) => {
        /** @type { LoginPage     } */
        /** @type { InventoryPage } */
        /** @type { CartPage      } */
    });
});
