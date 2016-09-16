Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl

  greeting: get: -> element(By.tagName('h2')).getText()

  setFullName: value: (fullName) ->
    return element(By.valueBind('fullName')).clear().sendKeys(fullName)

  pressSubmitButton: value: () ->
    element(By.css('button[type="submit"]')).click();

  openAlertDialog: value: () ->
    browser.wait () ->
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(
        browser.switchTo().alert().then(
          # use alert.accept instead of alert.dismiss which results in a browser crash
          accept =(alert) ->
            alert.accept()
            return true
          , () ->
            return false
            ))
