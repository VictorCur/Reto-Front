import { BasePage } from './BasePage';

export class InventoryPage extends BasePage {
  readonly pageTitle = this.page.locator('.title');
  readonly shoppingCartLink = this.page.locator('.shopping_cart_link');
  readonly productCard = this.page.locator('.inventory_item');

  async addProduct(productName: string): Promise<void> {
    const product = this.productCard.filter({
      has: this.page.locator('.inventory_item_name', { hasText: productName }),
    });

    await product.locator('button').click();
  }

  async openCart(): Promise<void> {
    await this.shoppingCartLink.click();
  }
}
