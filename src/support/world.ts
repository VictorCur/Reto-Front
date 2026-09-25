import { World, setWorldConstructor } from '@cucumber/cucumber';
import { Browser, chromium, Page } from '@playwright/test';

export class CustomWorld extends World {
  browser!: Browser;
  page!: Page;

  async init(): Promise<void> {
    this.browser = await chromium.launch({ headless: true });
    this.page = await this.browser.newPage();
  }
}

setWorldConstructor(CustomWorld);
