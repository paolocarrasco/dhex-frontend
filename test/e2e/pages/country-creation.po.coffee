Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl + '#/countries/create'

  countryNameInput: get: -> element(By.valueBind('countryName'))
  saveButton: get: -> element(By.css('.btn.btn-default'))
  labelForInput: get: -> element(By.css('[for="countryName"]'))

  save: value: (countryName) ->
    @countryNameInput.sendKeys(countryName)
    @saveButton.click()

  openAlertDialog: value: () ->
    browser.wait () ->
      browser.wait(ExpectedConditions.alertIsPresent(), 5000).then(
        browser.switchTo().alert().then(
          # use alert.accept instead of alert.dismiss which results in a browser crash
          accept = (alert) ->
            alert.accept()
            return true
          , () ->
            return false
        )
      )
