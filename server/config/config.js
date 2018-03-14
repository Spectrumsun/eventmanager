require('dotenv').config();

module.exports = {
  development: {
    username: process.env.configUsername,
    password: process.env.configPassword,
    database: process.env.configDatabase,
    host: process.env.configHost,
    dialect: process.env.configDialect || 'postgres',
    port: 5432,
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
    dialect: process.env.configDialect || 'postgres'
  },
  production: {
    url: process.env.configEnvVar,
    dialect: process.env.configDialect || 'postgres'
  }
};
