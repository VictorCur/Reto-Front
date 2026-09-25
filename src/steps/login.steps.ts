import { Given, Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { testConfig } from '../config/testData';
import { CartPage } from '../pages/CartPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { InventoryPage } from '../pages/InventoryPage';
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

When('I add the {string} product to the cart', async function (
  this: CustomWorld,
  productName: string,
) {
  await new InventoryPage(this.page).addProduct(productName);
});

When('agrego el producto {string} al carrito', async function (
  this: CustomWorld,
  productName: string,
) {
  await new InventoryPage(this.page).addProduct(productName);
});

When('I open the shopping cart', async function (this: CustomWorld) {
  await new InventoryPage(this.page).openCart();
});

When('abro el carrito de compras', async function (this: CustomWorld) {
  await new InventoryPage(this.page).openCart();
});

Then('I should see {string} in the cart', async function (this: CustomWorld, productName: string) {
  const cartPage = new CartPage(this.page);
  await expect(cartPage.itemName.filter({ hasText: productName })).toBeVisible();
});

Then('debo ver {string} en el carrito', async function (this: CustomWorld, productName: string) {
  const cartPage = new CartPage(this.page);
  await expect(cartPage.itemName.filter({ hasText: productName })).toBeVisible();
});

When('I proceed to checkout', async function (this: CustomWorld) {
  await new CartPage(this.page).proceedToCheckout();
});

When('prosigo al checkout', async function (this: CustomWorld) {
  await new CartPage(this.page).proceedToCheckout();
});

When(
  'I fill the checkout form with first name {string}, last name {string}, postal code {string}',
  async function (
    this: CustomWorld,
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.fillCustomerInformation(firstName, lastName, postalCode);
    await checkoutPage.continue();
  },
);

When(
  'completo el formulario con nombre {string}, apellido {string} y código postal {string}',
  async function (
    this: CustomWorld,
    firstName: string,
    lastName: string,
    postalCode: string,
  ) {
    const checkoutPage = new CheckoutPage(this.page);
    await checkoutPage.fillCustomerInformation(firstName, lastName, postalCode);
    await checkoutPage.continue();
  },
);

When('I continue to overview', async function (this: CustomWorld) {
  await new CheckoutPage(this.page).continue();
});

When('I finish the purchase', async function (this: CustomWorld) {
  await new CheckoutOverviewPage(this.page).finishPurchase();
});

When('finalizo la compra', async function (this: CustomWorld) {
  await new CheckoutOverviewPage(this.page).finishPurchase();
});

Then('the order confirmation message should contain {string}', async function (
  this: CustomWorld,
  expectedMessage: string,
) {
  const confirmationPage = new ConfirmationPage(this.page);
  await expect(confirmationPage.confirmationHeader).toContainText(expectedMessage);
});

Then('el mensaje de confirmación debe contener {string}', async function (
  this: CustomWorld,
  expectedMessage: string,
) {
  const confirmationPage = new ConfirmationPage(this.page);
  await expect(confirmationPage.confirmationHeader).toContainText(expectedMessage);
});
