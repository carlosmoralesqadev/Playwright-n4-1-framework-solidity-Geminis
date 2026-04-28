
export const inventoryLocators = {
    
    inventoryHeader : {
        title: "title", //data-test
        titleText: /Products/i,
        filter : "product-sort-container", //data-test
    },

    productsContainers : {
        intInventoryContainer: "inventory-container", // data-test
        inventoryList: "inventory-list", //data-test
        inventoryItem: "inventory-item", //data-test

        products : {
            nameProduct: "inventory-item-name", //data-test
            btnAddToCart: /Add To Cart/i,
            btnRemove: /Remove/i,
        }
    }
};