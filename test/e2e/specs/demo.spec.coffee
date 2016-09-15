poSkeleton = require('../pages/skeleton.po.coffee')
poWelcome = require('../pages/welcome.po.coffee')

describe 'aurelia skeleton app', ->

  When ->
    browser.loadAndWaitForAureliaPage('http://localhost:19876')

  Then ->
    expect(poSkeleton.currentPageTitle).toBe('Welcome | DHEX')
  And ->
    expect(poWelcome.greeting).toBe('Welcome to the DHEX App!')

  describe 'alert message when clicking submit button', ->
    Given ->
      poWelcome.setFullName('Rob')
    When ->
      poWelcome.pressSubmitButton()
    Then ->
      expect(poWelcome.openAlertDialog()).toBe(true)
