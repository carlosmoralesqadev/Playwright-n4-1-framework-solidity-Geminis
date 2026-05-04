export const payFormLocators = {
    pagePayForm: {
        iconCart: "shopping-cart-link", //data-test
        countIconCart: "shopping-cart-badge", //data-test
        title: "title", //data-test
        titleText: /Checkout: Your Information/i,
        inputFirstName: /First Name/i,
        inputLastName: /Last Name/i,
        inputPostalCode: / Zip\/Postal Code /i,
        btnReturnCart: /Cancel/i,
        btnContinueToCheckoutOverview: /Continue/i,
        msgErrorEmptyFirstName: /Error: First Name is required/i,
        msgErrorEmptyLasttName: /Error: Last Name is required/i,
        msgErrorEmptyPostalCode: /Error: Postal Code is required/i,
    },
};