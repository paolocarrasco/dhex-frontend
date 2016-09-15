Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl

  currentPageTitle: get: -> browser.getTitle()

  navigateTo: (href) ->
    element(By.css('a[href="' + href + '"]')).click()
    return browser.waitForRouterComplete()
