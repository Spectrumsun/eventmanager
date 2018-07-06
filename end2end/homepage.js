module.exports = {
  'Display homepage and ensure all elements are available': (browser) => {
    browser
      .windowMaximize()
      .url('http://localhost:5000')
      .waitForElementVisible('body', 3000)
      .pause(3000)
      .assert.containsText('.login', 'Login')
      .assert.containsText('.signup', 'Sign up')
      .assert.containsText('#logo', 'Event Manager')
      .assert.containsText('#home', 'Home')
      .assert.containsText('#navbarDropdown', 'Events')
      .assert.containsText('#search', 'Search Centers')
      .assert.elementPresent('input[name=search]');
  },

  'it should not allow a user to add event if they have not login': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#navbarDropdown')
      .pause(1000)
      .click('#addEvent')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('You need to LogIn First!');
    browser.pause(1000);
  },

  'it should take user to center page from home page': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#navbarDropdown')
      .pause(1000)
      .click('#viewCenter')
      .assert.urlEquals('http://localhost:5000/centers');
    browser.pause(1000);
  },

  'it should not login a user who has not registered': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#login')
      .assert.urlEquals('http://localhost:5000/login')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=email]', 'toy22@event.com')
      .setValue('input[name=password]', '123456789')
      .click('button[id=login]')
      .pause(1000)
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Email or password incorrect');
    browser.pause(1000);
  },

  'it should not sign up with missing fields': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#sigup')
      .assert.urlEquals('http://localhost:5000/signup')
      .assert.elementPresent('input[name=fullname]')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .assert.elementPresent('input[name=confirmPassword]')
      .setValue('input[name=fullname]', 'robot')
      .setValue('input[name=email]', 'robot@event.com')
      .setValue('input[name=password]', '123456789')
      .setValue('input[name=confirmPassword]', '1234567890')
      .click('span[id=terms]')
      .pause(1000)
      .waitForElementVisible('.modal', 1000)
      .click('button[id=close]')
      .pause(1000)
      .click('button[id=signup]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Confirm Password dont match Password');
    browser.pause(1000);
  },

  'it should not sign up existing email address': (browser) => {
    browser
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('#navbarDropdown')
      .click('#sigup')
      .assert.urlEquals('http://localhost:5000/signup')
      .assert.elementPresent('input[name=fullname]')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .assert.elementPresent('input[name=confirmPassword]')
      .setValue('input[name=fullname]', 'bot')
      .setValue('input[name=email]', 'bot@event.com')
      .setValue('input[name=password]', '1234567')
      .setValue('input[name=confirmPassword]', '1234567')
      .click('span[id=terms]')
      .pause(1000)
      .waitForElementVisible('.modal', 1000)
      .click('button[id=close]')
      .pause(5000)
      .click('button[id=signup]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Email already used !!');
    browser.pause(1000);
  },

  'it should sign up a with correct informations': (browser) => {
    browser
      .waitForElementVisible('body', 1000)
      .assert.elementPresent('#navbarDropdown')
      .click('#sigup')
      .assert.urlEquals('http://localhost:5000/signup')
      .assert.elementPresent('input[name=fullname]')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .assert.elementPresent('input[name=confirmPassword]')
      .setValue('input[name=fullname]', 'robocup22')
      .setValue('input[name=email]', `${Math.floor((Math.random() * 100) + 1)}@event.com`)
      .setValue('input[name=password]', '123456789')
      .setValue('input[name=confirmPassword]', '123456789')
      .click('span[id=terms]')
      .pause(1000)
      .waitForElementVisible('.modal', 1000)
      .click('button[id=close]')
      .pause(4000)
      .click('button[id=signup]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Account successfully created. Check your mail to confirm your account');
    browser.pause(1000);
  },

  'it should not login with wrong password a with correct informations': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#login')
      .assert.urlEquals('http://localhost:5000/login')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=email]', 'bot@event.com')
      .setValue('input[name=password]', '12345678910')
      .pause(2000)
      .click('button[id=login]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Email or password incorrect');
  },

  'it should not login a user who has not confirm email address': (browser) => {
    browser
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#login')
      .assert.urlEquals('http://localhost:5000/login')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=email]', 'bot22@event.com')
      .setValue('input[name=password]', '123456789')
      .pause(4000)
      .click('button[id=login]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('You have to first confirm Your Email');
  },


  'it should login with correct information': (browser) => {
    browser
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#login')
      .assert.urlEquals('http://localhost:5000/login')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=email]', 'bot@event.com')
      .setValue('input[name=password]', '123456789')
      .pause(9000)
      .click('button[id=login]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Welcome bot');
    browser.pause(1000);
  },

  // 'it should see admin panel when user is admin on the navbar': (browser) => {
  //   browser
  //     .url('http://localhost:5000')
  //     .waitForElementVisible('body', 5000)
  //     .assert.elementPresent('#navbarDropdown')
  //     .click('#navbarDropdown')
  //     .pause(1000)
  //     .click('#addEvent')
  //     .assert.urlEquals('http://localhost:5000/addevent')
  //     .assert.elementPresent('input[name=email]')
  //     .assert.elementPresent('input[name=password]')
  //   browser.pause(1000);
  // },


  'it should logout a user': (browser) => {
    browser
      .assert.elementPresent('#navbarDropdown')
      .click('#logout')
      .pause(5000)
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Logout Successfully');
    browser.pause(1000);
  },

};
