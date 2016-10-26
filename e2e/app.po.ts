import { browser, element, by } from 'protractor';

export class MyTracksPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('Tracks-root h1')).getText();
  }
}
