
import { expect   } from "@playwright/test";
import { Locators } from "../data/data.js";
import { BasePage } from "../pages/base/BasePage.js";

export class InventoryPage extends BasePage {
    /** @param {import('@playwright/test').Page} page */

    constructor(page){
        super(page)
    }

    async isList(){
        
    }

    async agregarprodcuto(indice){

    }

    async gotToCart(){

    }


    async isPageInventoryOk(){
        await expect(this.titleElement).toBeVisible()
        await expect(this.titleElement).toContainText(Locators.inventory.inventoryHeader.titleText)
    }

    
} 

//  titulo 
// lista
// cantidad articulos
// nombre de articulos
// add to cart 
// add y count in item
// remove
// remove and count
// cart item 
// count cart item 
