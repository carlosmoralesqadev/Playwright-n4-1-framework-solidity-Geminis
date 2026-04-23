import { test, expect } from "@playwright/test";

test.describe("Login Suite", () => {
    test("Login exitoso", async ({ page }) => {
        // Navegar
        await page.goto("https://example.com/login");

        // Acciones
        await page.fill("#username", "admin");
        await page.fill("#password", "admin123");
        await page.click("#login");

        // Validaciones
        await expect(page.locator("h1")).toHaveText("Dashboard");
    });
});
