'use strict';

require('dotenv').config();

module.exports = {
  development: {
    username: 'sun',
    password: '1',
    database: 'event',
    host: 5432,
    dialect: 'postgres',
    operatorAliases: false
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect: 'postgres',
    operatorAliases: false
  },
  production: {
    use_env_variable: process.env.DATABASE_URL,
    operatorAliases: false,
    dialect: 'postgres'
  }

};
//# sourceMappingURL=config.js.map