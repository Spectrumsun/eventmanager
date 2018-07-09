require('dotenv').config();

const upload = '/Users/andeladeveloper/CodeBase/js/endtoendUplaod/1526899340008-andela-epic-office-101-of-205.jpg.jpg';
const upload2 = '/Users/andeladeveloper/CodeBase/js/endtoendUplaod/1526900242085-1200px-Backyardpool.jpg.jpg';

module.exports = {
  'it should login the admin with correct information': (browser) => {
    browser
      .url('http://localhost:5000')
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdown')
      .click('#login')
      .assert.urlEquals('http://localhost:5000/login')
      .assert.elementPresent('input[name=email]')
      .assert.elementPresent('input[name=password]')
      .setValue('input[name=email]', 'bot@event.com')
      .setValue('input[name=password]', '123456789')
    // .pause(9000)
      .click('button[id=login]')
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Welcome Admin');
    browser.pause(1000);
  },

  'it should not add a new center if image is empty': (browser) => {
    browser
      .waitForElementVisible('body', 5000)
      .assert.elementPresent('#navbarDropdownCenter')
      .click('#navbarDropdownCenter')
      .pause(1000)
      .click('#addCenter')
      .pause(1000)
      .assert.urlEquals('http://localhost:5000/addcenter')
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=city]')
      .assert.elementPresent('input[name=availability]')
      .assert.elementPresent('input[name=address]')
      .assert.elementPresent('textarea[name=about]')
      .assert.elementPresent('input[name=image]')
      .assert.elementPresent('input[name=values]')
      .setValue('input[name=name]', 'Yaba Center')
      .setValue('input[name=city]', 'Andela road')
      .setValue('input[name=availability]', 'Yes')
      .setValue('input[name=address]', 'No 22 Andela way, Lagos')
      .setValue('textarea[name=about]', 'Testing 123')
      .pause(2000)
      .setValue('input[name=values]', 'Sound System')
      .click('#add')
      .pause(3000)
      .setValue('input[name=values]', 'car pack')
      .click('#add')
      .pause(3000)
      .setValue('input[name=values]', 'Free wifi')
      .click('#add')
      .pause(3000)
      .setValue('input[name=values]', 'Open space')
      .click('#add')
      .pause(3000)
      .click('#remove')
      .pause(3000)
      .setValue('input[name=values]', 'Projector item')
      .click('#add')
      .pause(2000)
      .click('button[id=centerSubmit]')
      .pause(1000)
      .expect.element('.toast').text.to.equal('Add an image');
    browser.pause(1000);
  },

  'it should not add a new center if facility is empty': (browser) => {
    browser
      .click('#navbarDropdownCenter')
      .pause(1000)
      .click('#addCenter')
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=city]')
      .assert.elementPresent('input[name=availability]')
      .assert.elementPresent('input[name=address]')
      .assert.elementPresent('textarea[name=about]')
      .assert.elementPresent('input[name=image]')
      .assert.elementPresent('input[name=values]')
      .setValue('input[name=name]', 'Yaba Center')
      .setValue('input[name=city]', 'Andela road')
      .setValue('input[name=availability]', 'Yes')
      .setValue('input[name=address]', 'No 22 Andela way, Lagos')
      .setValue('textarea[name=about]', 'Testing 123')
      .pause(3000)
      .setValue('input[name=image]', upload)
      .pause(2000)
      .click('button[id=centerSubmit]')
      .pause(1000)
      .expect.element('.toast').text.to.equal('Center facility must be set');
    browser.pause(1000);
  },

  'it should add a new center ': (browser) => {
    browser
      .click('#navbarDropdownCenter')
      .click('#addCenter')
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=city]')
      .assert.elementPresent('input[name=availability]')
      .assert.elementPresent('input[name=address]')
      .assert.elementPresent('textarea[name=about]')
      .assert.elementPresent('input[name=image]')
      .assert.elementPresent('input[name=values]')
      .setValue('input[name=name]', 'Yaba Center')
      .setValue('input[name=city]', 'Andela road')
      .setValue('input[name=availability]', 'Yes')
      .setValue('input[name=address]', 'No 22 Andela way, Lagos')
      .setValue('textarea[name=about]', 'Testing 123')
      .pause(2000)
      .setValue('input[name=image]', upload)
      .pause(2000)
      .setValue('input[name=values]', 'Sound System')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'car pack')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Free wifi')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Open space')
      .pause(2000)
      .click('button[id=centerSubmit]')
      .pause(6000)
      .expect.element('.toast').text.to.equal('successfully created');
    browser.pause(1000);
  },

  'it should load the center details page': (browser) => {
    browser
      .pause(3000)
      .click('#centerDetails')
      .pause(5000)
      .assert.elementPresent('#editCenter')
      .assert.elementPresent('#deleteCenter')
    browser.pause(1000);
  },

  'it should update center with new details ': (browser) => {
    browser
      .click('#editCenter')
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=city]')
      .assert.elementPresent('input[name=availability]')
      .assert.elementPresent('input[name=address]')
      .assert.elementPresent('textarea[name=about]')
      .assert.elementPresent('input[name=image]')
      .assert.elementPresent('input[name=values]')
      .setValue('input[name=name]', ' updated')
      .setValue('input[name=city]', ' updated')
      .setValue('input[name=address]', ' updated')
      .setValue('textarea[name=about]', ' updated')
      .pause(2000)
      .setValue('input[name=image]', upload2)
      .pause(2000)
      .setValue('input[name=values]', 'Pool')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'car pack')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Free wifi')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Open space')
      .pause(2000)
      .click('#remove')
      .pause(3000)
      .click('button[id=centerSubmit]')
      .pause(5000)
      .expect.element('.toast').text.to.equal('updated');
    browser.pause(1000);
  },

  'it should load the updated center details page': (browser) => {
    browser
      .pause(5000)
      .click('#centerDetails')
      .pause(5000)
      .assert.elementPresent('#editCenter')
      .assert.elementPresent('#deleteCenter')
    browser.pause(1000);
  },

  'it should delete the center': (browser) => {
    browser
      .pause(5000)
      .assert.elementPresent('#editCenter')
      .assert.elementPresent('#deleteCenter')
    browser.pause(1000);
  },

  'it should another a new center ': (browser) => {
    browser
      .click('#navbarDropdownCenter')
      .click('#addCenter')
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=city]')
      .assert.elementPresent('input[name=availability]')
      .assert.elementPresent('input[name=address]')
      .assert.elementPresent('textarea[name=about]')
      .assert.elementPresent('input[name=image]')
      .assert.elementPresent('input[name=values]')
      .setValue('input[name=name]', 'Epic Center')
      .setValue('input[name=city]', 'Andela road')
      .setValue('input[name=availability]', 'Yes')
      .setValue('input[name=address]', 'No 22 Andela way, Lagos')
      .setValue('textarea[name=about]', 'Testing 123')
      .pause(2000)
      .setValue('input[name=image]', upload)
      .pause(2000)
      .setValue('input[name=values]', 'Sound System')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'car pack')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Free wifi')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Open space')
      .pause(2000)
      .click('button[id=centerSubmit]')
      .pause(5000)
      .expect.element('.toast').text.to.equal('successfully created');
    browser.pause(1000);
  },

  'it should a new center ': (browser) => {
    browser
      .click('#navbarDropdownCenter')
      .click('#addCenter')
      .pause(1000)
      .assert.elementPresent('input[name=name]')
      .assert.elementPresent('input[name=city]')
      .assert.elementPresent('input[name=availability]')
      .assert.elementPresent('input[name=address]')
      .assert.elementPresent('textarea[name=about]')
      .assert.elementPresent('input[name=image]')
      .assert.elementPresent('input[name=values]')
      .setValue('input[name=name]', 'Ikeja Center')
      .setValue('input[name=city]', 'Andela road')
      .setValue('input[name=availability]', 'Yes')
      .setValue('input[name=address]', 'No 22 Andela way, Lagos')
      .setValue('textarea[name=about]', 'Testing 123')
      .pause(2000)
      .setValue('input[name=image]', upload2)
      .pause(2000)
      .setValue('input[name=values]', 'Sound System')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'car pack')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Free wifi')
      .click('#add')
      .pause(2000)
      .setValue('input[name=values]', 'Open space')
      .pause(2000)
      .click('button[id=centerSubmit]')
      .pause(5000)
      .expect.element('.toast').text.to.equal('successfully created');
    browser.pause(1000);
  },

  'it should logout admin': (browser) => {
    browser
      .pause(2000)
      .assert.elementPresent('#navbarDropdown')
      .click('#logout')
      .pause(1000)
      .waitForElementVisible('.toast', 1000)
      .expect.element('.toast').text.to.equal('Logout Successfully');
    browser.pause(1000);
  },
};
