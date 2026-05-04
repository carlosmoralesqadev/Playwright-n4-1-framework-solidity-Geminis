export const inventoryLocators = {
    inventoryHeader: {
        inventoryTitleText: /Products/i,
    },

    filter: {
        productsFilter: "product-sort-container", //data-test
        optionNameAToZ: /Name (A to Z)/i,
        optionNameZToA: /Name (Z to A)/i,
        optionPriceLowToHigh: /Price (low to high)/i,
        optionPriceHighToLow: /Price (high to low)/i,
    },

    productsContainers: {
        inventoryContainer: "#inventory_container",
        internoInventoryContainer: "inventory-container", // data-test
        productsList: "inventory-list", //data-test
        product: "inventory-item", //data-test
    },

    //*Contenido de cada producto
    img: {
        imgContainer: "div .inventory_item_img",
        itemImg: ".inventory_item_img img",
    },

    description: {
        descriptionContainer: "inventory-item-description",
        LabelContainer: ".inventory_item_label",
        productName: "inventory-item-name", //data-test
        productDescription: "inventory-item-desc", //datatest
    },

    price: {
        priceAndBtnContainer: ".pricebar",
        productPrice: "inventory-item-price",
        btnAddToCart: /Add To Cart/i,
        btnRemove: /Remove/i,
    },
};
