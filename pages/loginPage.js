const { expect } = require('@playwright/test');

exports.loginPage  = class loginPage {
    constructor(page) {
        this.page = page;
        this.loginLink = this.page.locator('.header-links a.ico-login');
        this.username = this.page.getByLabel('Email:');
        this.password = this.page.getByLabel('Password:');
        this.welcomeMesage = this.page.locator('.header-links li a.account');
        this.loginButton =  this.page.locator('.buttons input.login-button');
        this.logoutButton = this.page.locator('.header-links.ico-logout');
        this.dataError = this.page.locator('span.field-validation-error span');
        this.loginErrorMessage = this.page.locator('.validation-summary-errors ul>li')
    }

    async navigateToHomePage() {
        await this.page.goto('/');
    }
    async goToLoginPage() {
        await this.loginLink.click();
    }
    async enterUsername(username) {
        await this.username.type(username);
    }
    async enterPassword(password) {
        await this.password.type(password);
    }
    async clearInput(locator) {
        await locator.fill('');
    }
    async clickLoginButton() {
        await this.loginButton.click();
    }
    async clickLogoutButton() {
        await this.logoutButton.click();
    }
    async verifyWelcomeMessage(message) {
        await this.welcomeMesage.isVisible();
        await expect(this.welcomeMesage).toHaveText(message);
    }
    async dataErrorValidation(locator, message) {
        await locator.isVisible();
        await expect(locator).toHaveText(message);
    }
    async userLogin(username,password) {
        await this.navigateToHomePage();
        await this.goToLoginPage();
        await this.clearInput(this.username);
        await this.enterUsername(username);
        await this.clearInput(this.password);
        await this.enterPassword(password);
        await this.clickLoginButton();
        await this.page.waitForLoadState('networkidle');
    }
}
