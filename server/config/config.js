require('dotenv').config();

module.exports = {
  development: {
    username: process.env.configUsername,
    password: process.env.configPassword,
    database: process.env.configDatabase,
    host: process.env.configHost,
    dialect: process.env.configDialect,
    port: process.env.configPort,
  },
  test: {
    username: process.env.configUsername,
    password: process.env.configPassword,
    database: process.env.configDatabasetest,
    host: process.env.configHost,
    dialect: process.env.configDialect,
    port: process.env.configPort,
  },
  production: {
    url: process.env.configEnvVar,
    dialect: process.env.configDialect
  }
};
