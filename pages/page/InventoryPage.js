import { test, expect } from "@playwright/test";
import { Locators } from "../../data/data.js";
import { BasePage } from "../base/BasePage.js";

export class InventoryPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page) {
        super(page);

        //*Header
        this.inventoryTitleText = Locators.inventory.inventoryHeader.inventoryTitleText;

        this.countIconCart = page.getByTestId(Locators.header.cart.countIconCart);

        //*Filter
        this.productsFilter = page.getByTestId(Locators.inventory.filter.productsFilter);

        //*Products Containers
        this.inventoryContainer = page.locator(Locators.inventory.productsContainers.inventoryContainer);
        this.internoInventoryContainer = page.getByTestId(Locators.inventory.productsContainers.internoInventoryContainer);
        this.productsList = page.getByTestId(Locators.inventory.productsContainers.productsList);
        this.product = page.getByTestId(Locators.inventory.productsContainers.product);

        //*Img
        this.imgContainer = Locators.inventory.img.imgContainer;
        this.img = Locators.inventory.img.itemImg;

        //*Description
        this.descriptionContainer = Locators.inventory.description.descriptionContainer;
        this.LabelContainer = Locators.inventory.description.LabelContainer;
        this.productName = Locators.inventory.description.productName;
        this.productDescription = Locators.inventory.description.productDescription;

        //*Price
        this.priceAndBtnContainer = Locators.inventory.price.priceAndBtnContainer;
        this.productPrice = Locators.inventory.price.productPrice;
        this.btnAddToCart = page.getByRole("button", { name: Locators.inventory.price.btnAddToCart });
        this.btnRemove = page.getByRole("button", { name: Locators.inventory.price.btnRemove });
    }

    //*-----------------------------------------

    getProductByIndex(index) {
        return this.product.nth(index);
    }
    getBtnAddByProduct(product) {
        const anyBtnAdd = product.getByRole("button", {
            name: Locators.inventory.price.btnAddToCart,
        });
        return btnAddOfProduct;
    }
    async addProductByIndex(index) {
        const product = await this.getProductByIndex(index);
        const btnAdd = this.getBtnAddByProduct(product);
        await btnAdd.click();
    }

    //*-----------------------------------------

    getBtnRemoveByProduct(product) {
        const anyBtnRemove = product.getByRole("button", {
            name: Locators.inventory.price.btnRemove,
        });
        return btnRemoveOfProduct;
    }
    async removeProductByIndex(index) {
        const product = await this.getProductByIndex(index);
        const btnRemove = this.getBtnRemoveByProduct(product);
        await btnRemove.click();
    }

    //*------------------------------------------

    async gotToCart() {
        await this.header.iconCart.click();
    }

    //* isInventoryPageOk contiene a cada sección de la pagina
    async isInventoryPageOk() {
        await this.header.verifyUIHeader(this.inventoryTitleText);
        await this.isFilterOk();
        await this.isProductsContainersOk();
        await this.iterarProducts();
        await this.footer.isFooterOk();
    }

    async isFilterOk() {
        await expect(this.productsFilter).toBeVisible();
        await this.productsFilter.click();

        await this.productsFilter.selectOption("az");
        await expect(this.productsFilter).toHaveValue("az");

        await this.productsFilter.selectOption("za");
        await expect(this.productsFilter).toHaveValue("za");

        await this.productsFilter.selectOption("lohi");
        await expect(this.productsFilter).toHaveValue("lohi");

        await this.productsFilter.selectOption("hilo");
        await expect(this.productsFilter).toHaveValue("hilo");
    }

    async isProductsContainersOk() {
        //*Evalua que esten correctamente los contenedores de la sección de productos
        await expect(this.inventoryContainer.first()).toBeVisible();
        await expect(this.internoInventoryContainer).toBeVisible();
        await expect(this.productsList).toBeVisible();
    }

    async iterarProducts() {
        //*Cuantos productos hay - Me sirve para iterar
        const totalProducts = await this.product.count();

        //*Completo visualmente
        for (let i = 0; i < totalProducts; i++) {
            await this.isProductOk(i);
        }

        //*Agregar y contar
        for (let i = 0; i < totalProducts; i++) {
            await this.isBtnAddOk(product);
            await expect(this.countIconCart).toHaveText(i);
        }

        //*Remover y contar
        for (let i = totalProductos; i > 0; i--) {
            await this.isBtnRemoveOk(product);
            await expect(this.countIconCart).toHaveText(i);
        }
    }

    /**------------------------------------------------------*/
    /**------------------------------------------------------*/
    /**------------------------------------------------------*/
    //* isProductOk Tiene : Img, Description, Price, Btns
    //* isProduct pasa a isInventoryPageOk que evalua toda la pagina, donde iterando los productos.
    async isProductOk(i) {
        const product = await this.getProductByIndex(i);

        await this.isImgOk(product);
        await this.isDescriptionOk(product);
        await this.isPriceOk(product);
        await this.isAndFunctionBtnsOk(product, i);
    }
    async isImgOk(product) {
        await expect(product.locator(this.imgContainer)).toBeVisible();
        await expect(product.locator(this.img)).toBeVisible();
    }
    async isDescriptionOk(product) {
        await expect(product.getByTestId(this.descriptionContainer)).toBeVisible();
        await expect(product.locator(this.LabelContainer)).toBeVisible();
        await expect(product.getByTestId(this.productName)).toBeVisible();
        await expect(product.getByTestId(this.productDescription)).toBeVisible();
    }
    async isPriceOk(product) {
        await expect(product.locator(this.priceAndBtnContainer)).toBeVisible();
        await expect(product.getByTestId(this.productPrice)).toBeVisible();
    }

    //*Solo para verificar que los botenes estan o  no .
    async isAndFunctionBtnsOk(product, i) {
        const btnAdd = await this.getBtnAddByProduct(product);
        const btnRemove = await this.getBtnRemoveByProduct(product);

        await this.conditionBtnWithOutAddProduct(btnAdd, btnRemove);
        await this.addProductByIndex(i);
        await this.conditionBtnWithAddProduct(btnAdd, btnRemove);
        await this.isQtyProductsInIconCartOk(1);
        await this.removeProductByIndex(i);
        
        await this.isQtyProductsInIconCartOk("");
    }

    async conditionBtnWithAddProduct(btnAdd, btnRemove) {
        await expect(btnAdd).not.toBeVisible();
        await expect(btnRemove).toBeVisible();
    }

    async conditionBtnWithOutAddProduct(btnAdd, btnRemove) {
        await expect(btnAdd).toBeVisible();
        await expect(btnRemove).not.toBeVisible();
    }

    async isQtyProductsInIconCartOk(i) {
        await expect(this.countIconCart).toHaveText(i);
    }
}

// add y count in item
// remove
// remove and count
// cart item
// count cart item
