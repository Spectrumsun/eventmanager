require('dotenv').config();

module.exports = {
  development: {
    username: 'sun',
    password: '1',
    database: 'event',
    host: 5432,
    dialect: 'postgres'
  },
  test: {
    use_env_variable: 'DATABASE_URL_TEST',
    dialect: 'postgres'
  },
  production: {
    use_env_variable: process.env.DATABASE_URL
  }

};

