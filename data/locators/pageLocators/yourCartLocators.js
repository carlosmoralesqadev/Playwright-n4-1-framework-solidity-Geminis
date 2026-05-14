export const yourCartLocators = {
    title: {
        titleText: /Your Cart/i,
    },

    cartContainers: {
        cartContentsContainer: "cart-contents-container", //data-test
        cartList: "cart-list", //data-test
        qtyLabel: "cart-quantity-label", //data-test
        descLabel: "cart-desc-label", //data-test
    },

    product: {
        item: "inventory-item", //data-test
        itemQty: "item-quantity", //data-test
        itemNameLink: 'a[data-test*="title-link"]',
        itemName: "inventory-item-name", //data-test
        ItemDesc: "inventory-item-desc", //data-test
        itemPricebar: "item_pricebar", //data-test
        itemPrice = "inventory-item-price", //data-test

        btnAddToCart: /Add To Cart/i,
        btnRemove: /Remove/i,
    },

    btnCheckout: /Checkout/i,
    btnReturnInventory: /Continue Shopping/i,
};

//page.locator('a[data-test*="title-link"]')