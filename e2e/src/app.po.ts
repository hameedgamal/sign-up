import { browser, by, element } from 'protractor';
import { name, internet } from 'faker';

import locator from './app.locator';
export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getElementText(locator: string): Promise<string> {
    return element(by.css(locator)).getText();
  }

  async isPresent(locator: string): Promise<boolean> {
    return element(by.css(locator)).isPresent();
  }

  async fillForm(fields = ['firstName', 'lastName', 'email', 'password']): Promise<void> {
    fields.includes('firstName') &&
      await element(by.css(locator.firsNameField)).sendKeys(name.firstName());
    fields.includes('lastName') &&
      await element(by.css(locator.lastNameField)).sendKeys(name.lastName());
    fields.includes('email') &&
      await element(by.css(locator.emailField)).sendKeys(internet.exampleEmail());
    fields.includes('password') &&
      await element(by.css(locator.passwordField)).sendKeys(internet.password(8, false));
  }

  async submitForm(): Promise<void> {
    await element(by.css(locator.submitButton)).click();
  }
}
