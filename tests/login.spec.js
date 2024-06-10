import {test} from "../pages/index"
import * as utils from '../utils/index';
const data = require('../fixtures/testData.json');

test.describe("Login Validation",async()=> {
  test('Invalid Login Credentials - Invalid Email', async ({ userLoginPage }) => {
    await userLoginPage.userLogin(
      utils.generateInvalidEmail.invalidEmail(),
      utils.generateInvalidPassword.invalidPassword()
    );
    await userLoginPage.dataErrorValidation(userLoginPage.dataError, data.emailErr);
  })

  test('Invalid Login Credentials - Invalid Password', async ({ userLoginPage }) => {
    await userLoginPage.userLogin(
      data.username,
      utils.generateInvalidPassword.invalidPassword()
    );
    await userLoginPage.dataErrorValidation(userLoginPage.loginErrorMessage, data.invalidCredErr);
  })

  test('Valid Login Credentials', async ({ userLoginPage }) => {
    await userLoginPage.userLogin(data.username, data.password);
    await userLoginPage.verifyWelcomeMessage(data.username);
  })
})