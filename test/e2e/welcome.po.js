export class PageObjectWelcome {

  constructor() {

  }

  getGreeting() {
    return element(by.tagName('h2')).getText();
  }

  setFullName(value) {
    return element(by.valueBind('fullName')).clear().sendKeys(value);
  }

  pressSubmitButton() {
    return element(by.css('button[type="submit"]')).click();
  }

  openAlertDialog() {
    return browser.wait(() => {
      return browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(
        browser.switchTo().alert().then(
          // use alert.accept instead of alert.dismiss which results in a browser crash
          function(alert) { alert.accept(); return true; },
          function() { return false; }
        )
      );
    });
  }
}
