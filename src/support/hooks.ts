import { After, Before, Status } from '@cucumber/cucumber';
import fs from 'node:fs';
import { CustomWorld } from './world';

fs.mkdirSync('test-results', { recursive: true });

Before(async function (this: CustomWorld) {
  await this.init();
});

After(async function (this: CustomWorld, scenario) {
  if (this.page && scenario.result?.status === Status.FAILED) {
    const screenshotPath = `test-results/${Date.now()}-${scenario.pickle.name.replace(/\s+/g, '_')}.png`;
    await this.page.screenshot({ path: screenshotPath, fullPage: true });
  }

  if (this.browser) {
    await this.browser.close();
  }
});
