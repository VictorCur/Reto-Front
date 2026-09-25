import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { testConfig } from '../config/testData';
import { LoginPage } from '../pages/LoginPage';
import { CustomWorld } from '../support/world';

Given('I open the Sauce Demo login page', async function (this: CustomWorld) {
  await new LoginPage(this.page).open();
});

When('I login as {string} with password {string}', async function (
  this: CustomWorld,
  username: string,
  password: string,
) {
  await new LoginPage(this.page).login(username, password);
});

When('I log in with valid credentials', async function (this: CustomWorld) {
  await new LoginPage(this.page).login(testConfig.standardUser, testConfig.standardPassword);
});

When('I log in with invalid credentials', async function (this: CustomWorld) {
  await new LoginPage(this.page).login(testConfig.standardUser, testConfig.invalidPassword);
});

When('I log in with a locked user', async function (this: CustomWorld) {
  await new LoginPage(this.page).login(testConfig.lockedUser, testConfig.standardPassword);
});

Then('I should see the products page', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*inventory\.html/);
});

Then('debo ver la página de productos', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/.*inventory\.html/);
});

Then('I should see the login error message {string}', async function (
  this: CustomWorld,
  expectedMessage: string,
) {
  const loginPage = new LoginPage(this.page);
  await expect(loginPage.errorMessage).toContainText(expectedMessage);
});

Then('debo ver el mensaje de error {string}', async function (
  this: CustomWorld,
  expectedMessage: string,
) {
  const loginPage = new LoginPage(this.page);
  await expect(loginPage.errorMessage).toContainText(expectedMessage);
});
