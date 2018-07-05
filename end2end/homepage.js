module.exports = {
  'Display homepage and ensure all elements are available': (browser) => {
    browser
      .windowMaximize()
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .pause(3000)
      .assert.containsText('.login', 'Login')
      .assert.containsText('.signup', 'Sign up')
      .assert.containsText('#logo', 'Event Manager')
      .assert.containsText('#home', 'Home')
      .assert.containsText('#navbarDropdown', 'Events')
      .assert.containsText('#addevent', 'Add Event')
      .assert.containsText('#viewCenter', 'View Center')
  }

};
