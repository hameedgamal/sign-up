import { browser, logging } from 'protractor';

import { AppPage } from './app.po';
import locators from './app.locator'
import data from './app.data'

describe('Sign up App', () => {
  let page = new AppPage();

  beforeEach(async () => {
    await page.navigateTo();
  });

  it('should display header message', async () => {
    expect(await page.getElementText(locators.pageHeader)).toEqual('Sign up');
  });

  it('should be able to sign up', async () => {
    await page.fillForm();
    await page.submitForm();
    expect(await page.isPresent(locators.successNotification)).toBe(true);
  });

  it('should not be able to sign up if required info is missing', async () => {
    const fields = ['firstName', 'lastName', 'email', 'password'];

    for (const fieldName of fields) {
      const _fieldToFill = fields.filter(f => f !== fieldName);
      await page.fillForm(_fieldToFill);
      await page.submitForm();
      const _locatorName = fieldName + 'FieldErrorMsg';
      expect(await page.getElementText(locators[_locatorName])).toEqual(`${data[fieldName].required}`);
      await page.navigateTo();
    }
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
