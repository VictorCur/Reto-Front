import { BasePage } from './BasePage';

export class CheckoutOverviewPage extends BasePage {
  readonly finishButton = this.page.locator('[data-test="finish"]');

  async finishPurchase(): Promise<void> {
    await this.finishButton.click();
  }
}
