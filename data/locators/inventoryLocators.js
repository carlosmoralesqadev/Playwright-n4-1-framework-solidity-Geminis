
export const inventoryLocators = {
    inventoryHeader: {
        titleText: /Products/i,
        filter: "product-sort-container", //data-test
    },

    productsContainers: {
        inventoryContainer: "#inventory_container",
        internoInventoryContainer: "inventory-container", // data-test
        inventoryList: "inventory-list", //data-test
        inventoryItem: "inventory-item", //data-test

        products: {
            productName: "inventory-item-name", //data-test
            btnAddToCart: /Add To Cart/i,
            btnRemove: /Remove/i,

            inventoryItemImgContainer: ".inventory_item_img",
            inventoryItemImg: ".inventory_item_img",

            inventoryitemdescriptionContainer: "inventory-item-description",
            inventoryItemLabel: ".inventory_item_label",
            inventoryItemName : "inventory-item-name", //data-test
            inventoryItemDesc : "inventory-item-desc", //datatest
        },
    },
};