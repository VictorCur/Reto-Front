import { Then, When } from '@cucumber/cucumber';
import { expect } from '@playwright/test';

import { CartPage } from '../pages/CartPage';
import { InventoryPage } from '../pages/InventoryPage';
import { CustomWorld } from '../support/world';

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
