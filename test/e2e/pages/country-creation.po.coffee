Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl + '#/countries/create'

  labelForInput: get: -> element(By.css('[for="countryName"]'))
