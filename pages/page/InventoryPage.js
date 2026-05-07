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

    async selectProductByIndex(index) {
        return this.product.nth(index);
    }

    async addProduct(index) {
        const product = await this.selectProductByIndex(index);
        const btnAdd = product.getByRole("button", { name: Locators.inventory.price.btnAddToCart });
        await btnAdd.click();
    }

    async removeProduct(index) {
        const product = await this.selectProductByIndex(index);
        const btnRemove = product.getByRole("button", { name: Locators.inventory.price.btnRemove });
        await btnRemove.click();
    }

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
        //*Toma a product y cuenta cuantos hay.
        const totalProducts = await this.product.count();

        //*Sabiendo cuantos productos iguales hay, itera sobre cada uno de ellos y usa el metodo isProductOk
        for (let i = 0; i < totalProducts; i++) {
            await this.isProductOk(i);


        }
    }

    /**------------------------------------------------------*/
    /**------------------------------------------------------*/
    /**------------------------------------------------------*/
    //* isProductOk Tiene : Img, Description, Price, Btns
    //* isProduct pasa a isInventoryPageOk que evalua toda la pagina, donde iterando los productos.
    async isProductOk(indice) {
        const product = this.product.nth(indice);

        await this.isImgOk(product);
        await this.isDescriptionOk(product);
        await this.isPriceOk(product);
        await this.isBtnsOk(product);
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

    async isBtnsOk(product) {
        const btnAdd = product.getByRole("button", {
            name: Locators.inventory.price.btnAddToCart,
        });

        const btnRemove = product.getByRole("button", {
            name: Locators.inventory.price.btnRemove,
        });

        await expect(btnAdd).toBeVisible();
        await expect(btnRemove).not.toBeVisible();
        
        await btnAdd.click();
        await expect(btnAdd).not.toBeVisible();
        await expect(btnRemove).toBeVisible();

        //*  Separar btnAdd  de btnRemove   y entre una y otra agregar verificar el iconCartQTY, luego de remover tambien; pero hay que validar que se sumen uno tras otros, y luego que se descuenten uno tras otro.  


        await btnRemove.click();
        await expect(btnRemove).not.toBeVisible();
        await expect(btnAdd).toBeVisible();


        //* Queda sin productos agregados
    }

    async isQtyProductsInIconCartOk(){
        const qtyProductsInIconCart = this.countIconCart.textContent()

        await expect(this)
    }
}

// add y count in item
// remove
// remove and count
// cart item
// count cart item
