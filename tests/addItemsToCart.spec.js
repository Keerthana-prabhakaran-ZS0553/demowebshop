import {test} from "../pages/index"
const data = require('../fixtures/testData.json');

test.describe("Add Items to cart",async()=> {
    test("Can Add Items to cart", async ({ userLoginPage,cartPage }) => { 
        await userLoginPage.userLogin(data.username, data.password);
        await userLoginPage.verifyWelcomeMessage(data.username);
        await cartPage.goToBooksPage();
        await cartPage.getAllBooksList();
        await cartPage.clickAndVerifyProductTitle();
        await cartPage.addItemsToCart(data.productAddedNotification);
        await cartPage.goToCartPageAndValidateCartItems();
    })
})