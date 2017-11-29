require('dotenv').config();

module.exports = {
  development: {
    username: process.env.configUsername,
    password: process.env.configPassword,
    database: process.env.configDb,
    host: process.env.configHost,
    dialect: process.env.configDialect,
    operatorsAliases: false
  },
  test: {
    username: process.env.configUsername,
    password: process.env.configPassword,
    database: process.env.configTestDb,
    host: process.env.configHost,
    dialect : process.env.configDialect,
    operatorsAliases : false
  },
  production: {
    use_env_variable: process.env.configEnvVar,
    operatorsAliases: false
  }
};
