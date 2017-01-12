import { browser, element, by } from 'protractor';

export class ParentToChildByInputDecoratorPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
