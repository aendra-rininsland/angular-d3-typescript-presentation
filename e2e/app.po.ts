export class HiMooPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hi-moo-app h1')).getText();
  }
}
