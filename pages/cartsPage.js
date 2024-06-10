const { expect } = require('@playwright/test');

exports.cartsPage = class cartsPage {
    constructor(page) {
        this.page = page;
        this.productTitle = this.page.locator('.product-grid .product-item .product-title a');
        this.productTitleFromDetailsPage = this.page.locator('#product-details-form .product-essential .overview h1[itemprop="name"]');
        this.getAddToCartButton = this.page.locator('#product-details-form input.add-to-cart-button');
        this.barNotification = this.page.locator('#bar-notification.success p.content');
        this.getShoppingCartButton = this.page.locator('li#topcartlink a.ico-cart');
        this.getQuantityInputField = this.page.locator('.qty input.qty-input');
        this.getItemNameFromShoppingCart = this.page.locator('table.cart tbody tr.cart-item-row td.product a.product-name');
        this.getTableRows = this.page.locator('table.cart tbody tr.cart-item-row');
    }

    async goToBooksPage() {
        await this.page.goto('/books');
    }
    async getAllBooksList() {
        const products = await this.productTitle.all();
        for(const product of products){
            console.log(await product.textContent())
         }
    }
    async clickAndVerifyProductTitle() {
        const getTitle = await this.productTitle.first().textContent();
        await this.productTitle.first().click();
        const getProductTitleFromDetailsPage = await this.productTitleFromDetailsPage.textContent();
        await expect(getTitle.trim()).toEqual(getProductTitleFromDetailsPage.trim());
    }
    async addItemsToCart(message) {
       await this.getAddToCartButton.click();
       await this.barNotification.isVisible();
       const getAddedToCartMsg = await this.barNotification.innerText();
       await expect(getAddedToCartMsg.trim()).toEqual(message);
    }

    async getQuantityOfItemsAddedInCart() {
        const quantity = await this.getQuantityInputField.all();
       
        for(const items of quantity) {
        const quantity = await items.inputValue();
            console.log("Quantity: " + quantity);
        }
    }
    async getNameOfItemsAddedInCart() {
        const productName = await this.getItemNameFromShoppingCart.all();

        for(const items of productName) {
            const productTitle = await items.textContent();
            console.log("Product Name: " + productTitle.trim());
        }
    }
    async goToCartPage() {
        await this.getShoppingCartButton.click();
    }
    async goToCartPageAndValidateCartItems() {
        await this.goToCartPage();
        await this.getQuantityOfItemsAddedInCart();
        await this.getNameOfItemsAddedInCart();
    }
}
