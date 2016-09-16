countryManagementPage = require '../pages/country-management.po.coffee'
countryCreationPage = require '../pages/country-creation.po.coffee'

describe 'Country Creation', ->

  Given ->
    countryManagementPage.go()

  When ->
    countryManagementPage.countryCreationLink.click()

  Then ->
    expect(countryCreationPage.labelForInput.getText()).toBe 'Insert here the name of the country.'
