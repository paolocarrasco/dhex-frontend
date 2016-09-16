Page = require('astrolabe').Page

module.exports = Page.create
  url: get: -> browser.baseUrl + '#/countries'

  countryCreationLink: get: -> element(By.css('[href="#/countries/create"]'))
