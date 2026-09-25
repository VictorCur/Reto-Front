import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { CartPage } from '../pages/CartPage';
import { CheckoutOverviewPage } from '../pages/CheckoutOverviewPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { ConfirmationPage } from '../pages/ConfirmationPage';
import { CustomWorld } from '../support/world';

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
