import { BasePage } from './BasePage';

export class ConfirmationPage extends BasePage {
  readonly confirmationHeader = this.page.locator('.complete-header');

  async getConfirmationText(): Promise<string> {
    return (await this.confirmationHeader.textContent()) ?? '';
  }
}
