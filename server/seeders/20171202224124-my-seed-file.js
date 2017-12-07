const bcrypt = require('bcrypt');

require('dotenv').config();

module.exports = {
  up(queryInterface) {
    return queryInterface.bulkInsert('Users', [
      {
        fullname: 'John Doe',
        email: 'johndoe@ecample.com',
        password: bcrypt.hashSync(12345, bcrypt.genSaltSync(8)),
        role: 'admin',
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        fullname: 'Jane Doe',
        email: 'janedoe@ecample.com',
        password: bcrypt.hashSync(12345, bcrypt.genSaltSync(8)),
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], { returning: true });
  },

  down(queryInterface) {
    return queryInterface.bulkDelete('Users');
  }
};
