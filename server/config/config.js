require('dotenv').config();

module.exports = {
  development: {
    username: process.env.configUsername,
    password: process.env.configPassword,
    database: process.env.configDatabase,
    host: process.env.configHost,
    dialect: process.env.configDialect,
    port: 5432,
  },
  test: {
    url: process.env.DATABASE_URL_TEST,
    dialect: process.env.configDialect
  },
  production: {
    url: 'postgres://cegrrihw:rnQj8f_xe0Ariy3OdYv6sbNX5MxoXcK_@baasu.db.elephantsql.com:5432/cegrrihw',
    dialect: process.env.configDialect
  }
};
