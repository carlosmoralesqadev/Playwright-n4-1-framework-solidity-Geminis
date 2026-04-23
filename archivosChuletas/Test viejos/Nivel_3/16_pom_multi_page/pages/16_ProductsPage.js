import { expect } from "@playwright/test";

export class ProductsPage {
    /** @param {import('@playwright/test').Page} page */
    constructor(page) {
        this.page = page;
        this.titleProducts = page.getByText(/Products/i);
        this.backpackProduct = page.getByText(/Sauce Labs Backpack/i);
        this.contenedorProducts = page.getByTestId("inventory-list");
        this.itemInventario = page.locator(".inventory_item"); // Clase de cada tarjeta de producto
    }

    async validarTitleProducts() {
        await expect(this.titleProducts).toBeVisible();
    }

    async validarEstavisibleBackProduct() {
        await expect(this.backpackProduct).toBeVisible();
    }

    async esElPrimeroBackPack() {
        await expect(this.contenedorProducts.nth(0)).toContainText(/Sauce Labs Backpack/i);
    }

    async esElPrimeroItemBackPack() {
        // Aquí validao específicamente que la PRIMERA TARJETA tenga ese texto
        await expect(this.itemInventario.first()).toContainText(/Sauce Labs Backpack/i);
    }
}
