import {test as base} from "@playwright/test";
import { cartsPage } from "./cartsPage";
import { loginPage } from "./loginPage";

exports.test = base.test.extend({
    cartPage: async({page}, use) => {
        const books = new cartsPage(page);
        await use(books);
    },
    userLoginPage: async ({ page }, use) => {
        await use(new loginPage(page));
    },
});
exports.expect = base.expect;