
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

            //*Contenido de cada producto

            img : {
                inventoryItemImgContainer: ".inventory_item_img",
            },

            description : {
                inventoryItemDescriptionContainer : "inventory-item-description",
                inventoryItemLabelContainer: ".inventory_item_label",
                inventoryItemName : "inventory-item-name", //data-test
                inventoryItemDesc : "inventory-item-desc", //datatest


            },

            price : {
                pricebarContainer : ".pricebar",
                inventoryItemPrice : "inventory-item-price",
                btnAddToCart: /Add To Cart/i,
                btnRemove: /Remove/i,

            }
        },
    },
};