import {PageObjectWelcome} from './welcome.po.js';
import {PageObjectSkeleton} from './skeleton.po.js';

describe('aurelia skeleton app', function() {
  let poWelcome;
  let poSkeleton;

  beforeEach(() => {
    poSkeleton = new PageObjectSkeleton();
    poWelcome = new PageObjectWelcome();

    browser.loadAndWaitForAureliaPage('http://localhost:19876');
  });

  it('should load the page and display the initial page title', () => {
    expect(poSkeleton.getCurrentPageTitle()).toBe('Welcome | DHEX');
  });

  it('should display greeting', () => {
    expect(poWelcome.getGreeting()).toBe('Welcome to the DHEX App!');
  });

  it('should show alert message when clicking submit button', () => {
    poWelcome.setFullName('Rob');
    poWelcome.pressSubmitButton();
    expect(poWelcome.openAlertDialog()).toBe(true);
  });

});
