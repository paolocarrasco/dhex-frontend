poSkeleton = require('../pages/skeleton.po.coffee')
poWelcome = require('../pages/welcome.po.coffee')

describe 'aurelia skeleton app', ->

  beforeEach ->
    # browser.get('/')
    browser.loadAndWaitForAureliaPage('http://localhost:19876')

  it 'should load the page and display the initial page title', ->
    expect(poSkeleton.currentPageTitle).toBe('Welcome | DHEX')

  it 'should display greeting', ->
    expect(poWelcome.greeting).toBe('Welcome to the DHEX App!')

  it 'should show alert message when clicking submit button', ->
    poWelcome.setFullName('Rob')
    poWelcome.pressSubmitButton()
    expect(poWelcome.openAlertDialog()).toBe(true)
