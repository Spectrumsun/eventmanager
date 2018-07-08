module.exports = {
  'it should login the user with correct information': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#login')
      .assert.urlEquals('http://localhost:5000/login')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=email]', 'user@test.com')
      .setValue('input[name=password]', '123456')
      .click('button[id=login]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Welcome user');
    browser.pause(1000);
  },


  'it should not save if date is in the past': (browser) => {
    browser
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#navbarDropdown')
      .pause(1000)
      .click('#addEvent')
      .assert.urlEquals('http://localhost:5000/addevent')
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=startDate]')
      .assert.elementPresent('input[name=endDate]')
      .assert.elementPresent('input[name=time]')
      .assert.elementPresent('textarea[name=purpose]')
      .setValue('input[name=name]', 'Test party')
      .setValue('input[name=startDate]', '01-08-2017')
      .setValue('input[name=endDate]', '05-08-2017')
      .setValue('input[name=time]', '10:00')
      .setValue('textarea[name=purpose]', 'testing purpose')
      .pause(1000)
      .click('button[id=centerSelection]')
      .pause(1000)
      .click('button[id=pickCenter]')
      .pause(1000)
      .click('button[id=submitEvent]')
      .pause(3000)
      .expect.element('.toast').text.to.equal('You cant set a Past date for the event')
    browser.pause(1000);
  },

  'it should not save if end date is behind start date': (browser) => {
    browser
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=startDate]')
      .assert.elementPresent('input[name=endDate]')
      .assert.elementPresent('input[name=time]')
      .assert.elementPresent('textarea[name=purpose]')
      .setValue('input[name=name]', 'Test party')
      .setValue('input[name=startDate]', '22-12-2018')
      .setValue('input[name=endDate]', '05-01-2018')
      .setValue('input[name=time]', '10:00')
      .setValue('textarea[name=purpose]', 'testing purpose')
      .pause(1000)
      .click('button[id=centerSelection]')
      .pause(1000)
      .click('button[id=pickCenter]')
      .pause(1000)
      .click('button[id=submitEvent]')
      .pause(3000)
      .expect.element('.toast').text.to.equal('!Event end date cannot be behind event start date')
    browser.pause(1000);
  },


  'it should not save if center is not chosen': (browser) => {
    browser
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#navbarDropdown')
      .pause(1000)
      .click('#addEvent')
      .waitForElementVisible('.toast', 1000)
      .assert.urlEquals('http://localhost:5000/addevent')
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=startDate]')
      .assert.elementPresent('input[name=endDate]')
      .assert.elementPresent('input[name=time]')
      .assert.elementPresent('textarea[name=purpose]')
      .setValue('input[name=name]', 'Test party')
      .setValue('input[name=startDate]', '01-01-2018')
      .setValue('input[name=endDate]', '05-04-2018')
      .setValue('input[name=time]', '10:00')
      .setValue('textarea[name=purpose]', 'testing purpose')
      .click('button[id=submitEvent]')
      .pause(3000)
      .expect.element('.toast').text.to.equal('You have to choose a Center')
    browser.pause(1000);
  },


  'it should save event with correct information': (browser) => {
    browser
      .pause(1000)
      .click('#navbarDropdown')
      .pause(1000)
      .click('#addEvent')
      .assert.urlEquals('http://localhost:5000/addevent')
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=startDate]')
      .assert.elementPresent('input[name=endDate]')
      .assert.elementPresent('input[name=time]')
      .assert.elementPresent('textarea[name=purpose]')
      .setValue('input[name=name]', 'Test party')
      .setValue('input[name=startDate]', '01-08-2018')
      .setValue('input[name=endDate]', '05-08-2018')
      .setValue('input[name=time]', '10:00')
      .setValue('textarea[name=purpose]', 'testing purpose')
      .pause(1000)
      .click('button[id=centerSelection]')
      .pause(1000)
      .click('button[id=pickCenter]')
      .pause(1000)
      .click('button[id=submitEvent]')
      .pause(1000)
      .expect.element('.toast').text.to.equal('successfully created')
    browser.pause(1000);
  },

  'it should view event details when user clicks on event': (browser) => {
    browser
      .pause(1000)
      .click('h6[id=viewEvents]')
      .pause(1000)
      .assert.visible('#editEvent')
    browser.pause(1000);
  },

  'it should open the edit event page when user click on edit': (browser) => {
    browser
      .pause(1000)
      .click('#editEvent')
      .pause(1000)
    browser.pause(1000);
  },

  'it should update event with new details': (browser) => {
    browser
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=startDate]')
      .assert.elementPresent('input[name=endDate]')
      .assert.elementPresent('input[name=time]')
      .assert.elementPresent('textarea[name=purpose]')
      .setValue('input[name=name]', ' update')
      .setValue('input[name=time]', '10:00')
      .setValue('textarea[name=purpose]', ' update')
      .pause(1000)
      .click('button[id=centerSelection]')
      .pause(1000)
      .click('button[id=pickCenter]')
      .pause(1000)
      .click('button[id=submitEvent]')
      .pause(1000)
      .expect.element('.toast').text.to.equal('updated')
    browser.pause(1000);
  },

  'it should delete the event when delete button is pressed': (browser) => {
    browser
      .pause(1000)
      .click('h6[id=viewEvents]')
      .click('button[id=deleteEvent]')
      .pause(1000)
      .assert.elementPresent('#exampleModal')
      .pause(2000)
      .click('button[id=removeIt]')
      .pause(5000)
      .expect.element('.toast').text.to.equal('Event successfully deleted!')
    browser.pause(1000);
  },

  'it add a new event with correct information': (browser) => {
    browser
      .pause(1000)
      .click('#navbarDropdown')
      .pause(1000)
      .click('#addEvent')
      .assert.urlEquals('http://localhost:5000/addevent')
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=startDate]')
      .assert.elementPresent('input[name=endDate]')
      .assert.elementPresent('input[name=time]')
      .assert.elementPresent('textarea[name=purpose]')
      .setValue('input[name=name]', 'Test party')
      .setValue('input[name=startDate]', '01-08-2018')
      .setValue('input[name=endDate]', '05-08-2018')
      .setValue('input[name=time]', '10:00')
      .setValue('textarea[name=purpose]', 'testing purpose')
      .pause(1000)
      .click('button[id=centerSelection]')
      .pause(1000)
      .click('button[id=pickCenter]')
      .pause(1000)
      .click('button[id=submitEvent]')
      .pause(1000)
      .expect.element('.toast').text.to.equal('successfully created')
    browser.pause(1000);
  },

  'it should logout user': (browser) => {
    browser
      .assert.elementPresent('#navbarDropdown')
      .pause(5000)
      .click('#logout')
      .pause(1000)
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Logout Successfully');
    browser.pause(1000);
  },

  'it should not allow you to search with empty box': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .assert.elementPresent('input[name=search]')
      .pause(1000)
      .click('#search')
      .pause(1000)
      .expect.element('.toast').text.to.equal('Search box cant be empty')
    browser.pause(1000);
  },

  'it should return result for searched item': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .assert.elementPresent('input[name=search]')
      .setValue('input[name=search]', 'Yaba')
      .pause(1000)
      .click('#search')
      .pause(6000)
    browser.pause(1000);
  }
};
