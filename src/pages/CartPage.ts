import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  readonly itemName = this.page.locator('.cart_item .inventory_item_name');
  readonly checkoutButton = this.page.locator('[data-test="checkout"]');

  async verifyItemVisible(productName: string): Promise<boolean> {
    return await this.itemName.filter({ hasText: productName }).isVisible();
  }

  async proceedToCheckout(): Promise<void> {
    await this.checkoutButton.click();
  }
}
